import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - World Friends Blog',
  description: 'Privacy policy for WorldFriends',
}

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy for WorldFriends</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6"><strong>Last Updated: September 18, 2025</strong></p>
        
        <p className="text-gray-700 mb-6">
          WorldFriends is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application, WorldFriends. The App is a social networking platform designed to help users aged 13 and older connect with others globally to make friends and learn about other cultures. Please read this policy carefully. If you do not agree with the terms of this Privacy Policy, please do not use the App.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
          <p className="text-gray-700 mb-4">We collect the following types of information:</p>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">1.1 Personal Information</h3>
          <p className="text-gray-700 mb-4">When you register, create a profile, or use the App, we may collect:</p>
          <ul className="text-gray-700 mb-4 list-disc pl-6">
            <li><strong>First Name</strong>: Provided during registration or profile creation.</li>
            <li><strong>Email Address</strong>: Used for account creation, login, and communication.</li>
            <li><strong>Country</strong>: Selected during profile creation to connect users globally.</li>
            <li><strong>Profile Photo</strong>: Optional, provided by you via camera or gallery access for profile personalization.</li>
            <li><strong>User-Provided Profile Data</strong>: Includes username, gender, birthdate (to confirm users are 13+), languages spoken, languages learning, bio, and hobbies, as entered during profile creation.</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">1.2 Usage Data</h3>
          <p className="text-gray-700 mb-4">We collect information about how you interact with the App, such as:</p>
          <ul className="text-gray-700 mb-4 list-disc pl-6">
            <li>Friend requests sent or received.</li>
            <li>Messages sent or received in conversations.</li>
            <li>Search queries and filters used in the Discover section.</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">1.3 Device Information</h3>
          <p className="text-gray-700 mb-4">We may collect limited device information to ensure App functionality, such as:</p>
          <ul className="text-gray-700 mb-4 list-disc pl-6">
            <li>Locales information for language localization and time.</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">1.4 Camera and Gallery Access</h3>
          <p className="text-gray-700 mb-4">
            With your permission, the App may access your device's camera or gallery to allow you to upload a profile photo or attach images to posts. This access is optional and requires your explicit consent.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">1.5 Information We Do Not Collect</h3>
          <p className="text-gray-700 mb-4">We do not collect:</p>
          <ul className="text-gray-700 mb-4 list-disc pl-6">
            <li>Precise location data (e.g., city or GPS coordinates).</li>
            <li>Any personal information beyond what is listed above.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">We use the information we collect to:</p>
          <ul className="text-gray-700 mb-4 list-disc pl-6">
            <li>Provide and operate the App, including user profiles, friend connections, messaging, and post interactions.</li>
            <li>Personalize your experience, such as displaying relevant users in the Discover section or tailoring greetings based on your time zone.</li>
            <li>Facilitate communication between users through friend requests and messaging.</li>
            <li>Analyze usage trends to improve App performance and features.</li>
            <li>Ensure compliance with age group restrictions (e.g., limiting visibility to users in the same age group: 13–17 or 18+).</li>
            <li>Comply with legal obligations and protect the safety of our users.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Sharing Your Information</h2>
          <p className="text-gray-700 mb-4">We may share your information in the following circumstances:</p>
          <ul className="text-gray-700 mb-4 list-disc pl-6">
            <li><strong>With Service Providers</strong>: We use trusted third-party services, such as Cloudflare for email delivery and storage, and Convex for backend operations, to support App functionality. These providers are contractually obligated to protect your data and only process it as instructed.</li>
            <li><strong>For Legal Purposes</strong>: We may disclose your information if required by law, such as in response to a court order, or to protect our rights, safety, or property, or that of our users.</li>
          </ul>
          <p className="text-gray-700 mb-4">We do not sell your personal information to third parties.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
          <p className="text-gray-700 mb-4">We prioritize the security of your information and use industry-standard measures to protect it, including:</p>
          <ul className="text-gray-700 mb-4 list-disc pl-6">
            <li><strong>Encryption</strong>: Data is encrypted in transit and at rest, facilitated by Cloudflare and Convex services.</li>
            <li><strong>Secure Storage</strong>: User data is stored on secure servers managed by our trusted service providers.</li>
            <li><strong>Access Controls</strong>: Only authorized personnel have access to user data for operational purposes.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Choices and Rights</h2>
          <p className="text-gray-700 mb-4">You have control over your information and may:</p>
          <ul className="text-gray-700 mb-4 list-disc pl-6">
            <li><strong>Access or Update</strong>: View or edit your profile information via the App's Edit Profile screen.</li>
            <li><strong>Delete</strong>: Request deletion of your account via the Settings screen, subject to legal retention requirements.</li>
            <li><strong>Opt-Out</strong>: Disable optional features like camera/gallery access or opt out of promotional communications.</li>
            <li><strong>Block Users</strong>: Block other users to restrict their interactions with you, managed via the Blocked Users screen.</li>
          </ul>
          <p className="text-gray-700 mb-4">Residents of certain regions may have additional rights:</p>
          <ul className="text-gray-700 mb-4 list-disc pl-6">
            <li><strong>GDPR (European Economic Area)</strong>: You may request access, correction, deletion, or restriction of your data, or object to processing.</li>
            <li><strong>CCPA (California)</strong>: You may request information about data collected or shared and opt out of any data sales (though we do not sell data).</li>
          </ul>
          <p className="text-gray-700 mb-4">To exercise these rights, contact us at hello@worldfriends.app.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Children's Privacy</h2>
          <p className="text-gray-700 mb-4">
            The App is designed for users aged 13 and older, in compliance with the Children's Online Privacy Protection Act (COPPA). We do not knowingly collect personal information from children under 13. If we learn that a user under 13 has provided personal information, we will promptly delete it and terminate the account. Users are grouped by age (13–17, 18+) to ensure age-appropriate interactions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Retention</h2>
          <p className="text-gray-700 mb-4">
            We retain your personal information only for as long as necessary to provide the App's services or comply with legal obligations. If you delete your account, we will remove your personal information from our systems, except where retention is required by law (e.g., for audit purposes).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. International Data Transfers</h2>
          <p className="text-gray-700 mb-4">
            WorldFriends is a global app, and your information may be processed in countries outside your region, including the United States, where our service providers (Cloudflare and Convex) operate. We ensure that such transfers comply with applicable data protection laws, including GDPR for EEA users.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to This Privacy Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will notify you of significant changes by posting the updated policy in the App or via email. Your continued use of the App after such changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have questions, concerns, or requests regarding this Privacy Policy, please contact us at:
          </p>
          <ul className="text-gray-700 mb-4 list-disc pl-6">
            <li><strong>Email</strong>: hello@worldfriends.app</li>
          </ul>
          <p className="text-gray-700">
            Thank you for using WorldFriends. We are committed to fostering a safe and respectful community for global friendships.
          </p>
        </section>
      </div>
    </div>
  )
}