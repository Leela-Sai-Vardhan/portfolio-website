"use client";

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://mcrdjwdkcoulyiafiiaz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jcmRqd2RrY291bHlpYWZpaWF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxNzI2NjYsImV4cCI6MjA1MTc0ODY2Nn0.bNvXNXBVPkdNTuFJqFHfCMGgfKwTlJnxmWsrYQqOAzI';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function EmailVerificationPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [showPlayStore, setShowPlayStore] = useState(false);
    const [isVerifying, setIsVerifying] = useState(true);

    useEffect(() => {
        // Verify email first, then auto-open app
        const verifyAndOpenApp = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const tokenHash = urlParams.get('token_hash');
            const type = urlParams.get('type');

            if (tokenHash && type === 'email') {
                try {
                    console.log('Verifying email with Supabase...');
                    const { data, error } = await supabase.auth.verifyOtp({
                        token_hash: tokenHash,
                        type: 'email'
                    });

                    if (error) {
                        console.error('Verification error:', error);
                    } else {
                        console.log('✅ Email verified successfully!', data);
                    }
                } catch (err) {
                    console.error('Verification exception:', err);
                }
            }

            setIsVerifying(false);

            // Auto-open app after verification
            setTimeout(() => {
                openApp();
            }, 1500);
        };

        verifyAndOpenApp();
    }, []);

    const buildDeepLink = () => {
        if (typeof window === 'undefined') return '';

        const urlParams = new URLSearchParams(window.location.search);
        const tokenHash = urlParams.get('token_hash');
        const type = urlParams.get('type');
        const accessToken = urlParams.get('access_token');
        const refreshToken = urlParams.get('refresh_token');

        const baseUrl = 'https://sai-vardhan-portfolio.vercel.app/earn-rupai/auth/verify';
        const params = new URLSearchParams();

        if (tokenHash) params.append('token_hash', tokenHash);
        if (type) params.append('type', type);
        if (accessToken) params.append('access_token', accessToken);
        if (refreshToken) params.append('refresh_token', refreshToken);

        return params.toString() ? `${baseUrl}?${params.toString()}` : baseUrl;
    };

    const openApp = () => {
        const deepLink = buildDeepLink();

        setIsLoading(true);

        // Try to open the app
        if (typeof window !== 'undefined') {
            window.location.href = deepLink;
        }

        // If app doesn't open in 2 seconds, show Play Store button
        setTimeout(() => {
            setIsLoading(false);
            setShowPlayStore(true);
        }, 2000);
    };

    return (
        <>
            <style jsx global>{`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                }

                .verify-container {
                    background: white;
                    border-radius: 24px;
                    padding: 48px 32px;
                    max-width: 480px;
                    width: 100%;
                    text-align: center;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                    animation: slideUp 0.5s ease-out;
                }

                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .success-icon {
                    width: 80px;
                    height: 80px;
                    margin: 0 auto 24px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    animation: scaleIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }

                @keyframes scaleIn {
                    from {
                        transform: scale(0);
                    }
                    to {
                        transform: scale(1);
                    }
                }

                .checkmark {
                    width: 40px;
                    height: 40px;
                    stroke: white;
                    stroke-width: 3;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    fill: none;
                    animation: drawCheck 0.8s ease-out 0.3s forwards;
                    stroke-dasharray: 100;
                    stroke-dashoffset: 100;
                }

                @keyframes drawCheck {
                    to {
                        stroke-dashoffset: 0;
                    }
                }

                .verify-container h1 {
                    font-size: 28px;
                    font-weight: 700;
                    color: #1a202c;
                    margin-bottom: 12px;
                }

                .subtitle {
                    font-size: 16px;
                    color: #718096;
                    margin-bottom: 32px;
                    line-height: 1.6;
                }

                .app-info {
                    background: #f7fafc;
                    border-radius: 16px;
                    padding: 20px;
                    margin-bottom: 24px;
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .app-icon {
                    width: 56px;
                    height: 56px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 28px;
                    flex-shrink: 0;
                }

                .app-details {
                    text-align: left;
                    flex: 1;
                }

                .app-name {
                    font-size: 18px;
                    font-weight: 600;
                    color: #1a202c;
                    margin-bottom: 4px;
                }

                .app-tagline {
                    font-size: 14px;
                    color: #718096;
                }

                .btn {
                    display: inline-block;
                    width: 100%;
                    padding: 16px 24px;
                    font-size: 16px;
                    font-weight: 600;
                    text-decoration: none;
                    border-radius: 12px;
                    transition: all 0.3s ease;
                    cursor: pointer;
                    border: none;
                    font-family: inherit;
                }

                .btn-primary {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    margin-bottom: 12px;
                    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
                }

                .btn-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
                }

                .btn-primary:active {
                    transform: translateY(0);
                }

                .btn-secondary {
                    background: white;
                    color: #667eea;
                    border: 2px solid #e2e8f0;
                }

                .btn-secondary:hover {
                    border-color: #667eea;
                    background: #f7fafc;
                }

                .loading {
                    margin-top: 20px;
                }

                .spinner {
                    width: 24px;
                    height: 24px;
                    border: 3px solid #e2e8f0;
                    border-top-color: #667eea;
                    border-radius: 50%;
                    animation: spin 0.8s linear infinite;
                    margin: 0 auto 8px;
                }

                @keyframes spin {
                    to { transform: rotate(360deg); }
                }

                .loading-text {
                    font-size: 14px;
                    color: #718096;
                }

                .footer {
                    margin-top: 32px;
                    padding-top: 24px;
                    border-top: 1px solid #e2e8f0;
                }

                .footer-text {
                    font-size: 13px;
                    color: #a0aec0;
                    margin-bottom: 8px;
                }

                .footer-link {
                    color: #667eea;
                    text-decoration: none;
                    font-weight: 500;
                }

                .footer-link:hover {
                    text-decoration: underline;
                }

                @media (max-width: 480px) {
                    .verify-container {
                        padding: 36px 24px;
                    }

                    .verify-container h1 {
                        font-size: 24px;
                    }

                    .subtitle {
                        font-size: 15px;
                    }
                }
            `}</style>

            <div className="verify-container">
                <div className="success-icon">
                    <svg className="checkmark" viewBox="0 0 52 52">
                        <path d="M14 27l7.5 7.5L38 18" />
                    </svg>
                </div>

                <h1>Email Verified Successfully! 🎉</h1>
                <p className="subtitle">
                    Your email has been confirmed. You can now start earning money by completing tasks in the Earn Rupai app.
                </p>

                <div className="app-info">
                    <div className="app-icon">💰</div>
                    <div className="app-details">
                        <div className="app-name">Earn Rupai</div>
                        <div className="app-tagline">Complete tasks, earn money</div>
                    </div>
                </div>

                {!isLoading && !showPlayStore && (
                    <button className="btn btn-primary" onClick={openApp}>
                        Open Earn Rupai App
                    </button>
                )}

                {isLoading && (
                    <div className="loading">
                        <div className="spinner"></div>
                        <div className="loading-text">Opening app...</div>
                    </div>
                )}

                {showPlayStore && (
                    <a
                        href="https://play.google.com/store/apps/details?id=com.earnrupai.earnrupai"
                        className="btn btn-secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        App not installed? Download from Play Store
                    </a>
                )}

                <div className="footer">
                    <p className="footer-text">
                        Need help? Visit our{' '}
                        <a href="https://sai-vardhan-portfolio.vercel.app" className="footer-link">website</a>
                    </p>
                </div>
            </div>
        </>
    );
}
