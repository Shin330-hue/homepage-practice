import { useState } from 'react'
import { motion } from 'framer-motion'

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // TODO: 送信先を後で設定
        // 現在は送信先未設定のため、コンソールに出力
        console.log('Form submitted:', formData)

        // 仮の送信処理（後で実際のAPIに置き換え）
        try {
            // const response = await fetch('YOUR_FORM_ENDPOINT', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify(formData)
            // })

            // 仮の成功表示
            await new Promise(resolve => setTimeout(resolve, 1000))
            setSubmitStatus('success')
            setFormData({ name: '', email: '', phone: '', message: '' })
        } catch (error) {
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
            setTimeout(() => setSubmitStatus(null), 5000)
        }
    }

    return (
        <section className="contact-section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                お問い合わせ
            </motion.h2>

            <motion.form
                className="contact-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="form-group">
                    <label htmlFor="name">
                        お名前 <span className="required">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="山田 太郎"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">
                        メールアドレス <span className="required">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="example@email.com"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">電話番号</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="090-1234-5678"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">お問い合わせ内容</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        placeholder="お問い合わせ内容をご記入ください"
                    />
                </div>

                <button
                    type="submit"
                    className="submit-btn"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? '送信中...' : '送信する'}
                </button>

                {submitStatus === 'success' && (
                    <p className="submit-message success">
                        お問い合わせありがとうございます。送信が完了しました。
                    </p>
                )}
                {submitStatus === 'error' && (
                    <p className="submit-message error">
                        送信に失敗しました。時間をおいて再度お試しください。
                    </p>
                )}
            </motion.form>
        </section>
    )
}

export default ContactForm
