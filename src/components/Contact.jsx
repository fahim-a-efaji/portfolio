import useFadeUp from '../hooks/useFadeUp'
import useContactForm from '../hooks/useContactForm'
import { CONTACT } from '../data/portfolio'
import styles from '../styles/Contact.module.css'

const FORM_FIELDS = [
  { name: 'name',    label: 'Name',    type: 'text',  placeholder: 'Your name' },
  { name: 'email',   label: 'Email',   type: 'email', placeholder: 'your@email.com' },
  { name: 'subject', label: 'Subject', type: 'text',  placeholder: "What's this about?" },
]

export default function Contact() {
  const ref = useFadeUp()
  const { fields, status, sending, handleChange, handleSubmit } = useContactForm()

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>

          {/* ── Left: contact info ── */}
          <div className={`${styles.info} fu`} ref={ref(0)}>
            <p className="sec-tag">// let's connect</p>
            <h2>Get In Touch</h2>
            <p>
              Open to new opportunities in data engineering, analytics, and
              AI-powered solutions. Based in Budapest, Hungary. Open to roles
              worldwide and willing to relocate.
            </p>

            <div className={styles.linksList}>
              {CONTACT.map((item) =>
                item.href ? (
                  <a
                    key={item.label}
                    className={styles.link}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <span className={styles.linkIcon} aria-hidden="true">{item.icon}</span>
                    <div>
                      <div className={styles.linkLabel}>{item.label}</div>
                      <div className={styles.linkValue}>{item.value}</div>
                    </div>
                  </a>
                ) : (
                  <div key={item.label} className={styles.link} style={{ cursor: 'default' }}>
                    <span className={styles.linkIcon} aria-hidden="true">{item.icon}</span>
                    <div>
                      <div className={styles.linkLabel}>{item.label}</div>
                      <div className={styles.linkValue}>{item.value}</div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* ── Right: contact form ── */}
          <div className="fu" ref={ref(1)}>
            <p className="sec-tag" style={{ marginBottom: '1rem' }}>// send a message</p>

            <form className={styles.formCol} onSubmit={handleSubmit} noValidate>
              {FORM_FIELDS.map(({ name, label, type, placeholder }) => (
                <div className={styles.formGroup} key={name}>
                  <label htmlFor={name}>{label}</label>
                  <input
                    id={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={fields[name]}
                    onChange={handleChange}
                    required
                    disabled={sending}
                  />
                </div>
              ))}

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your message…"
                  value={fields.message}
                  onChange={handleChange}
                  required
                  disabled={sending}
                />
              </div>

              <button
                type="submit"
                className={`btn btn-primary ${styles.submitBtn}`}
                disabled={sending}
              >
                {sending ? 'Sending…' : 'Send Message'}
              </button>

              {status === 'ok' && (
                <p className={styles.statusOk}>
                  ✅ Message saved! I&apos;ll get back to you soon.
                </p>
              )}
              {status === 'err' && (
                <p className={styles.statusErr}>
                  ❌ Something went wrong. Please email me directly.
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
