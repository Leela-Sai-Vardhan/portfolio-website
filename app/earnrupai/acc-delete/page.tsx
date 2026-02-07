"use client";

import { FormEvent } from 'react';
import Image from 'next/image';

export default function AccountDeletionPage() {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const reason = formData.get('reason') as string;
        const confirmed = formData.get('confirm') as string;

        if (!confirmed) {
            alert('Please confirm that you understand this action is irreversible.');
            return;
        }

        const subject = encodeURIComponent(`Account Deletion Request: ${email}`);
        const body = encodeURIComponent(
            `Please delete my account associated with ${email}.\n\n` +
            `I confirm this request.\n\n` +
            (reason ? `Reason: ${reason}` : '')
        );

        window.location.href = `mailto:leelasaivardhandhavala@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <>
            <style jsx global>{`
                body {
                    margin: 0;
                    padding: 0;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    min-height: 100vh;
                }

                .deletion-page {
                    padding: 20px;
                    min-height: 100vh;
                }

                .deletion-container {
                    max-width: 600px;
                    margin: 0 auto;
                    background: white;
                    border-radius: 16px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                    overflow: hidden;
                }

                .deletion-header {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    padding: 40px 30px;
                    text-align: center;
                }

                .deletion-logo {
                    width: 120px;
                    height: 120px;
                    margin: 0 auto 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .deletion-app-name {
                    font-size: 28px;
                    font-weight: 700;
                    margin: 0;
                }

                .deletion-hero {
                    padding: 40px 30px;
                    text-align: center;
                    border-bottom: 1px solid #e5e7eb;
                }

                .deletion-hero h1 {
                    font-size: 32px;
                    color: #1f2937;
                    margin-bottom: 16px;
                    font-weight: 700;
                }

                .deletion-hero p {
                    font-size: 16px;
                    color: #6b7280;
                    line-height: 1.8;
                    max-width: 500px;
                    margin: 0 auto;
                }

                .deletion-form-section {
                    padding: 40px 30px;
                }

                .deletion-form-group {
                    margin-bottom: 24px;
                }

                .deletion-form-group label {
                    display: block;
                    font-weight: 600;
                    color: #374151;
                    margin-bottom: 8px;
                    font-size: 14px;
                }

                .deletion-required {
                    color: #ef4444;
                }

                .deletion-form-group input[type="email"],
                .deletion-form-group textarea {
                    width: 100%;
                    padding: 12px 16px;
                    border: 2px solid #e5e7eb;
                    border-radius: 8px;
                    font-size: 16px;
                    font-family: inherit;
                    transition: all 0.3s ease;
                }

                .deletion-form-group input[type="email"]:focus,
                .deletion-form-group textarea:focus {
                    outline: none;
                    border-color: #667eea;
                    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
                }

                .deletion-form-group textarea {
                    resize: vertical;
                    min-height: 100px;
                }

                .deletion-checkbox-group {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    margin: 24px 0;
                    padding: 16px;
                    background: #fef2f2;
                    border: 1px solid #fecaca;
                    border-radius: 8px;
                }

                .deletion-checkbox-group input[type="checkbox"] {
                    width: 20px;
                    height: 20px;
                    margin-top: 2px;
                    cursor: pointer;
                    accent-color: #ef4444;
                }

                .deletion-checkbox-group label {
                    margin: 0;
                    font-weight: 500;
                    color: #991b1b;
                    cursor: pointer;
                    font-size: 14px;
                }

                .deletion-submit-btn {
                    width: 100%;
                    padding: 16px;
                    background: #ef4444;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
                }

                .deletion-submit-btn:hover {
                    background: #dc2626;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 16px rgba(239, 68, 68, 0.4);
                }

                .deletion-submit-btn:active {
                    transform: translateY(0);
                }

                .deletion-footer {
                    background: #f9fafb;
                    padding: 30px;
                    text-align: center;
                    border-top: 1px solid #e5e7eb;
                }

                .deletion-footer p {
                    color: #6b7280;
                    font-size: 14px;
                    margin-bottom: 8px;
                }

                .deletion-footer a {
                    color: #667eea;
                    text-decoration: none;
                    font-weight: 600;
                    transition: color 0.3s ease;
                }

                .deletion-footer a:hover {
                    color: #764ba2;
                    text-decoration: underline;
                }

                @media (max-width: 640px) {
                    .deletion-page {
                        padding: 10px;
                    }

                    .deletion-header {
                        padding: 30px 20px;
                    }

                    .deletion-logo {
                        width: 80px;
                        height: 80px;
                    }

                    .deletion-app-name {
                        font-size: 24px;
                    }

                    .deletion-hero {
                        padding: 30px 20px;
                    }

                    .deletion-hero h1 {
                        font-size: 24px;
                    }

                    .deletion-hero p {
                        font-size: 14px;
                    }

                    .deletion-form-section {
                        padding: 30px 20px;
                    }

                    .deletion-footer {
                        padding: 20px;
                    }
                }
            `}</style>

            <div className="deletion-page">
                <div className="deletion-container">
                    {/* Header */}
                    <div className="deletion-header">
                        <div className="deletion-logo">
                            <Image
                                src="/earnrupai-logo.png"
                                alt="Earn Rupai Logo"
                                width={120}
                                height={120}
                                priority
                            />
                        </div>
                        <h2 className="deletion-app-name">Earn Rupai</h2>
                    </div>

                    {/* Hero Section */}
                    <div className="deletion-hero">
                        <h1>Request Account Deletion</h1>
                        <p>
                            Pursuant to Google Play Data Safety standards, you have the right to request that your entire account and associated data (Name, Email, Profile Information) be permanently deleted from our servers.
                        </p>
                        <p style={{ marginTop: '16px', fontSize: '14px', color: '#374151', fontWeight: 500 }}>
                            📧 We will contact you through your registered email address to confirm the deletion request.
                        </p>
                    </div>

                    {/* Form Section */}
                    <div className="deletion-form-section">
                        <form onSubmit={handleSubmit}>
                            <div className="deletion-form-group">
                                <label htmlFor="email">
                                    Registered Email Address <span className="deletion-required">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div className="deletion-form-group">
                                <label htmlFor="reason">Reason for Deletion (Optional)</label>
                                <textarea
                                    id="reason"
                                    name="reason"
                                    placeholder="Please let us know why you're leaving (optional)"
                                ></textarea>
                            </div>

                            <div className="deletion-checkbox-group">
                                <input
                                    type="checkbox"
                                    id="confirm"
                                    name="confirm"
                                    required
                                    value="confirmed"
                                />
                                <label htmlFor="confirm">
                                    I understand that this action is irreversible and my data will be removed within 30 days.
                                </label>
                            </div>

                            <button type="submit" className="deletion-submit-btn">
                                Submit Deletion Request
                            </button>
                        </form>
                    </div>

                    {/* Footer */}
                    <div className="deletion-footer">
                        <p>&copy; 2026 Earn Rupai. All rights reserved.</p>
                        <a href="https://doc-hosting.flycricket.io/earn-rupai-privacy-policy/d1fc8b8a-d13e-4f4e-aa32-a33c18f89916/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </>
    );
}
