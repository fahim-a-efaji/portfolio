import { useState } from 'react'

const INITIAL = { name: '', email: '', subject: '', message: '' }

const API_BASE = import.meta.env.VITE_API_BASE || ''

function saveToIndexedDB(data) {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open('portfolio_contacts', 1)
    req.onupgradeneeded = (e) =>
      e.target.result.createObjectStore('messages', { autoIncrement: true })
    req.onsuccess = (e) => {
      const db = e.target.result
      const tx = db.transaction('messages', 'readwrite')
      tx.objectStore('messages').add(data)
      tx.oncomplete = resolve
      tx.onerror    = reject
    }
    req.onerror = reject
  })
}

export default function useContactForm() {
  const [fields,  setFields]  = useState(INITIAL)
  const [status,  setStatus]  = useState(null)   // null | 'ok' | 'err'
  const [sending, setSending] = useState(false)

  const handleChange = (e) =>
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setStatus(null)

    const payload = { ...fields, ts: new Date().toISOString() }

    // 1. Try Azure Function if URL is configured
    if (API_BASE) {
      try {
        const res = await fetch(`${API_BASE}/contact`, {
          method:  'POST',
          headers: { 'Content-Type': 'application/json' },
          body:    JSON.stringify(payload),
        })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        setStatus('ok')
        setFields(INITIAL)
        setSending(false)
        return
      } catch (err) {
        console.warn('Azure Function unavailable, falling back to IndexedDB:', err)
      }
    }

    // 2. Fallback: save locally in IndexedDB
    try {
      await saveToIndexedDB(payload)
      setStatus('ok')
      setFields(INITIAL)
    } catch {
      setStatus('err')
    } finally {
      setSending(false)
    }
  }

  return { fields, status, sending, handleChange, handleSubmit }
}
