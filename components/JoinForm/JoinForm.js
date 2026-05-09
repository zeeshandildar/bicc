'use client';
import { useState } from 'react';
import { useLanguage } from '../../lib/LanguageContext';
import styles from './JoinForm.module.css';

export default function JoinForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ fullName: '', email: '', phone: '', age: '', playingRole: 'other', experienceLevel: 'beginner', message: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = t('Name is required', 'El nombre es obligatorio');
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = t('Valid email is required', 'Se requiere un correo electrónico válido');
    if (form.age && (isNaN(form.age) || form.age < 10 || form.age > 80)) e.age = t('Age must be 10-80', 'La edad debe estar entre 10 y 80');
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      const res = await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, age: form.age ? Number(form.age) : undefined }),
      });
      if (res.ok) {
        setSuccess(true);
      } else {
        setErrors({ submit: t('Something went wrong. Please try again.', 'Algo salió mal. Por favor, inténtalo de nuevo.') });
      }
    } catch {
      setErrors({ submit: t('Network error. Please try again.', 'Error de red. Por favor, inténtalo de nuevo.') });
    }
    setSubmitting(false);
  };

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
    if (errors[field]) setErrors({ ...errors, [field]: undefined });
  };

  if (success) {
    return (
      <div className={styles.formWrapper}>
        <div className={styles.success}>
          <div className={styles.successIcon}>✓</div>
          <h3>{t('Application Submitted!', '¡Solicitud Enviada!')}</h3>
          <p>{t('Thank you for your interest in joining BICC. We\'ll be in touch soon to welcome you to the family.', 'Gracias por tu interés en unirte al BICC. Nos pondremos en contacto pronto para darte la bienvenida a la familia.')}</p>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">{t('Full Name *', 'Nombre Completo *')}</label>
        <input type="text" className="form-input" value={form.fullName} onChange={handleChange('fullName')} placeholder={t('Your full name', 'Tu nombre completo')} />
        {errors.fullName && <div className={styles.error}>{errors.fullName}</div>}
      </div>

      <div className={styles.row}>
        <div className="form-group">
          <label className="form-label">{t('Email *', 'Correo Electrónico *')}</label>
          <input type="email" className="form-input" value={form.email} onChange={handleChange('email')} placeholder="you@example.com" />
          {errors.email && <div className={styles.error}>{errors.email}</div>}
        </div>
        <div className="form-group">
          <label className="form-label">{t('Phone', 'Teléfono')}</label>
          <input type="tel" className="form-input" value={form.phone} onChange={handleChange('phone')} placeholder="+34 XXX XXX XXX" />
        </div>
      </div>

      <div className={styles.row}>
        <div className="form-group">
          <label className="form-label">{t('Age', 'Edad')}</label>
          <input type="number" className="form-input" value={form.age} onChange={handleChange('age')} placeholder="25" min="10" max="80" />
          {errors.age && <div className={styles.error}>{errors.age}</div>}
        </div>
        <div className="form-group">
          <label className="form-label">{t('Playing Role', 'Rol de Juego')}</label>
          <select className="form-select" value={form.playingRole} onChange={handleChange('playingRole')}>
            <option value="batsman">{t('Batsman', 'Bateador')}</option>
            <option value="bowler">{t('Bowler', 'Lanzador')}</option>
            <option value="all-rounder">{t('All-Rounder', 'Todoterreno')}</option>
            <option value="wicket-keeper">{t('Wicket-Keeper', 'Wicket-Keeper')}</option>
            <option value="other">{t('Other / Not Sure', 'Otro / No estoy seguro')}</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">{t('Experience Level', 'Nivel de Experiencia')}</label>
        <select className="form-select" value={form.experienceLevel} onChange={handleChange('experienceLevel')}>
          <option value="beginner">{t('Beginner — Just starting out', 'Principiante — Recién empezando')}</option>
          <option value="intermediate">{t('Intermediate — Played casually', 'Intermedio — He jugado casualmente')}</option>
          <option value="advanced">{t('Advanced — Regular competitive play', 'Avanzado — Juego competitivo regular')}</option>
          <option value="professional">{t('Professional — Club or national level', 'Profesional — Nivel de club o nacional')}</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">{t('Why do you want to join BICC?', '¿Por qué quieres unirte al BICC?')}</label>
        <textarea className="form-textarea" value={form.message} onChange={handleChange('message')} placeholder={t('Tell us about yourself and what draws you to cricket in Barcelona...', 'Cuéntanos sobre ti y qué te atrae del críquet en Barcelona...')} />
      </div>

      {errors.submit && <div className={styles.error} style={{ marginBottom: 16 }}>{errors.submit}</div>}

      <button type="submit" className={styles.submitBtn} disabled={submitting}>
        {submitting ? t('Submitting...', 'Enviando...') : t('Submit Application', 'Enviar Solicitud')}
      </button>
    </form>
  );
}
