import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Check, CircleCheck, RotateCcw } from 'lucide-react'
import { accommodationOptions, experienceStyles, tripInterests } from '../data/contact'

type InquiryValues = {
  name: string
  email: string
  country: string
  dates: string
  travellers: string
  duration: string
  accommodation: string
  experienceStyle: string
  interests: string[]
  message: string
}

type FieldName = 'name' | 'email' | 'country' | 'dates' | 'travellers' | 'interests'

const initialValues: InquiryValues = {
  name: '',
  email: '',
  country: '',
  dates: '',
  travellers: '',
  duration: '',
  accommodation: '',
  experienceStyle: '',
  interests: [],
  message: '',
}

function getFieldError(field: FieldName, values: InquiryValues): string {
  if (field === 'name' && !values.name.trim()) return 'Please enter your name.'
  if (field === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) return 'Enter a valid email address.'
  if (field === 'country' && !values.country.trim()) return 'Please enter your country.'
  if (field === 'dates' && !values.dates) return 'Please choose your preferred travel date.'
  if (field === 'travellers' && (!values.travellers || Number(values.travellers) < 1 || !Number.isInteger(Number(values.travellers)))) return 'At least one traveller is required.'
  if (field === 'interests' && values.interests.length === 0) return 'Choose at least one interest.'
  return ''
}

function FieldError({ id, message }: { id: string; message: string }) {
  return message ? <span className="contact-field-error" id={id} role="alert">{message}</span> : null
}

export function ContactInquiryForm() {
  const [values, setValues] = useState<InquiryValues>(initialValues)
  const [submitted, setSubmitted] = useState(false)
  const [complete, setComplete] = useState(false)

  const update = <K extends keyof InquiryValues>(field: K, value: InquiryValues[K]) => {
    setValues((current) => ({ ...current, [field]: value }))
    if (complete) setComplete(false)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    const hasErrors = (['name', 'email', 'country', 'dates', 'travellers', 'interests'] as const)
      .some((field) => getFieldError(field, values))
    if (!hasErrors) setComplete(true)
  }

  const resetForm = () => {
    setValues(initialValues)
    setSubmitted(false)
    setComplete(false)
  }

  return (
    <section className="contact-inquiry" id="trip-inquiry" aria-labelledby="contact-inquiry-title">
      <div className="contact-inquiry__inner">
        <div className="contact-inquiry__intro">
          <span className="eyebrow">A NOTE TO THE MOUNTAINS</span>
          <h2 id="contact-inquiry-title">Tell Us About<br /><em>Your Journey.</em></h2>
          <p>The more you tell us, the better we can understand the kind of Himalayan experience you are looking for.</p>
          <div className="contact-inquiry__aside">
            <span aria-hidden="true">01 / 02</span>
            <p>Your ideas, dates and interests help set the direction. Nothing is booked or sent from this demo form.</p>
          </div>
        </div>

        <div className="contact-form-card">
          <AnimatePresence mode="wait">
            {complete ? (
              <motion.div
                className="contact-success"
                key="success"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                role="status"
                aria-live="polite"
              >
                <span className="contact-success__icon"><CircleCheck size={30} /></span>
                <span className="eyebrow">YOUR IDEAS, GATHERED</span>
                <h3>Your Journey Starts Here</h3>
                <p>Thank you for sharing your travel ideas. Your enquiry has been prepared successfully.</p>
                <p className="contact-success__note">This is a frontend demo state. No enquiry has been sent or stored.</p>
                <button type="button" className="contact-reset-button" onClick={resetForm}><RotateCcw size={15} /> Start another enquiry</button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                noValidate
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
              >
                <div className="contact-form-heading">
                  <div><span className="eyebrow">YOUR JOURNEY, YOUR WAY</span><h3>Let’s begin with the details.</h3></div>
                  <span className="contact-form-step">01 <i /> 02</span>
                </div>

                <fieldset className="contact-form-section">
                  <legend>Personal Information</legend>
                  <div className="contact-form-grid contact-form-grid--three">
                    <label className="contact-field contact-field--wide">
                      <span>Full Name <b>*</b></span>
                      <input autoComplete="name" name="name" required value={values.name} onChange={(event) => update('name', event.target.value)} aria-invalid={submitted && Boolean(getFieldError('name', values))} aria-describedby={submitted && getFieldError('name', values) ? 'contact-name-error' : undefined} />
                      <FieldError id="contact-name-error" message={submitted ? getFieldError('name', values) : ''} />
                    </label>
                    <label className="contact-field">
                      <span>Email Address <b>*</b></span>
                      <input autoComplete="email" name="email" type="email" required value={values.email} onChange={(event) => update('email', event.target.value)} aria-invalid={submitted && Boolean(getFieldError('email', values))} aria-describedby={submitted && getFieldError('email', values) ? 'contact-email-error' : undefined} />
                      <FieldError id="contact-email-error" message={submitted ? getFieldError('email', values) : ''} />
                    </label>
                    <label className="contact-field">
                      <span>Country <b>*</b></span>
                      <input autoComplete="country-name" name="country" required value={values.country} onChange={(event) => update('country', event.target.value)} aria-invalid={submitted && Boolean(getFieldError('country', values))} aria-describedby={submitted && getFieldError('country', values) ? 'contact-country-error' : undefined} />
                      <FieldError id="contact-country-error" message={submitted ? getFieldError('country', values) : ''} />
                    </label>
                  </div>
                </fieldset>

                <fieldset className="contact-form-section">
                  <legend>Trip Information</legend>
                  <div className="contact-form-grid contact-form-grid--three">
                    <label className="contact-field">
                      <span>Preferred Travel Dates <b>*</b></span>
                      <input name="dates" type="date" required value={values.dates} onChange={(event) => update('dates', event.target.value)} aria-invalid={submitted && Boolean(getFieldError('dates', values))} aria-describedby={submitted && getFieldError('dates', values) ? 'contact-dates-error' : undefined} />
                      <FieldError id="contact-dates-error" message={submitted ? getFieldError('dates', values) : ''} />
                    </label>
                    <label className="contact-field">
                      <span>Number of Travellers <b>*</b></span>
                      <input name="travellers" type="number" min="1" step="1" required value={values.travellers} onChange={(event) => update('travellers', event.target.value)} aria-invalid={submitted && Boolean(getFieldError('travellers', values))} aria-describedby={submitted && getFieldError('travellers', values) ? 'contact-travellers-error' : undefined} />
                      <FieldError id="contact-travellers-error" message={submitted ? getFieldError('travellers', values) : ''} />
                    </label>
                    <label className="contact-field">
                      <span>Approximate Trip Duration</span>
                      <input name="duration" placeholder="e.g. 7 days" value={values.duration} onChange={(event) => update('duration', event.target.value)} />
                    </label>
                  </div>
                </fieldset>

                <fieldset className="contact-form-section" role="group" aria-required="true" aria-invalid={submitted && Boolean(getFieldError('interests', values))} aria-describedby={submitted && getFieldError('interests', values) ? 'contact-interests-error' : undefined}>
                  <legend>What draws you to the Himalayas? <b>*</b></legend>
                  <div className="contact-interest-grid">
                    {tripInterests.map((interest) => {
                      const checked = values.interests.includes(interest)
                      return (
                        <label className={`contact-interest${checked ? ' is-selected' : ''}`} key={interest}>
                          <input type="checkbox" name="interests" value={interest} checked={checked} onChange={(event) => update('interests', event.target.checked ? [...values.interests, interest] : values.interests.filter((item) => item !== interest))} />
                          <span className="contact-interest__check" aria-hidden="true">{checked && <Check size={13} />}</span>
                          <span>{interest}</span>
                        </label>
                      )
                    })}
                  </div>
                  <FieldError id="contact-interests-error" message={submitted ? getFieldError('interests', values) : ''} />
                </fieldset>

                <div className="contact-form-grid contact-form-grid--two">
                  <fieldset className="contact-form-section">
                    <legend>Accommodation Preference</legend>
                    <div className="contact-choice-list">
                      {accommodationOptions.map((option) => <label key={option}><input type="radio" name="accommodation" value={option} checked={values.accommodation === option} onChange={() => update('accommodation', option)} /><span>{option}</span></label>)}
                    </div>
                  </fieldset>
                  <fieldset className="contact-form-section">
                    <legend>Experience Level</legend>
                    <div className="contact-choice-list">
                      {experienceStyles.map((style) => <label key={style}><input type="radio" name="experienceStyle" value={style} checked={values.experienceStyle === style} onChange={() => update('experienceStyle', style)} /><span>{style}</span></label>)}
                    </div>
                  </fieldset>
                </div>

                <label className="contact-field contact-field--message">
                  <span>Your Message</span>
                  <textarea name="message" rows={4} placeholder="Tell us what you would like to experience..." value={values.message} onChange={(event) => update('message', event.target.value)} />
                </label>

                <div className="contact-submit-row">
                  <p>Required fields are marked <b>*</b>. This form is a demo and does not send your information.</p>
                  <button type="submit" className="contact-submit">Start Planning My Journey <ArrowRight size={17} /></button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
