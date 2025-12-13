import { Link } from 'react-router-dom'

function PrivacyPolicy() {
    return (
        <div className="privacy-page">
            <div className="privacy-container">
                <Link to="/" className="back-link">← ホームへ戻る</Link>

                <h1>プライバシーポリシー</h1>
                <p className="privacy-date">最終更新日: 2025年12月13日</p>

                <section className="privacy-section">
                    <h2>1. 個人情報の取得について</h2>
                    <p>
                        当サイトでは、お問い合わせフォームを通じて、お客様の氏名、メールアドレス、お問い合わせ内容などの個人情報を取得することがあります。
                        取得した個人情報は、お問い合わせへの対応、サービスの提供、およびこれらに付随する目的のために利用いたします。
                    </p>
                </section>

                <section className="privacy-section">
                    <h2>2. 個人情報の利用目的</h2>
                    <p>当サイトで取得した個人情報は、以下の目的で利用いたします：</p>
                    <ul>
                        <li>お問い合わせへの対応</li>
                        <li>サービスの提供および改善</li>
                        <li>重要なお知らせの配信</li>
                        <li>その他、ご本人様が同意した目的</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2>3. 個人情報の第三者への提供</h2>
                    <p>
                        当サイトは、以下の場合を除き、お客様の個人情報を第三者に提供することはありません：
                    </p>
                    <ul>
                        <li>ご本人様の同意がある場合</li>
                        <li>法令に基づく場合</li>
                        <li>人の生命、身体または財産の保護のために必要がある場合</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2>4. 個人情報の管理</h2>
                    <p>
                        当サイトは、お客様の個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、
                        セキュリティシステムの維持・管理体制の整備等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行います。
                    </p>
                </section>

                <section className="privacy-section">
                    <h2>5. Cookie（クッキー）の使用について</h2>
                    <p>
                        当サイトでは、サービスの利便性向上のためにCookieを使用することがあります。
                        Cookieとは、ウェブサイトがお客様のコンピュータに一時的にデータを保存する仕組みです。
                        お客様がブラウザの設定でCookieの送受信を許可している場合、ウェブサイトは、お客様のブラウザからCookieを取得できます。
                    </p>
                </section>

                <section className="privacy-section">
                    <h2>6. アクセス解析ツールについて</h2>
                    <p>
                        当サイトでは、Googleアナリティクスなどのアクセス解析ツールを使用する場合があります。
                        これらのツールはトラフィックデータの収集のためにCookieを使用しています。
                        このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
                    </p>
                </section>

                <section className="privacy-section">
                    <h2>7. プライバシーポリシーの変更</h2>
                    <p>
                        当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直し、
                        その改善に努めます。修正された最新のプライバシーポリシーは常に本ページにて開示されます。
                    </p>
                </section>

                <section className="privacy-section">
                    <h2>8. お問い合わせ</h2>
                    <p>
                        当サイトの個人情報の取扱に関するお問い合わせは、
                        <Link to="/#contact" className="privacy-link">お問い合わせフォーム</Link>
                        よりご連絡ください。
                    </p>
                </section>

                <div className="privacy-footer">
                    <p>K's Movie Producet</p>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy
