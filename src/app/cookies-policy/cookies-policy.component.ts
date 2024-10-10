import { Component } from '@angular/core';

@Component({
  selector: 'app-cookies-policy',
  templateUrl: './cookies-policy.component.html',
  styleUrl: './cookies-policy.component.css'
})
export class CookiesPolicyComponent {
  cookieSections = [
    {
      title: 'What Are Cookies?',
      description: `Cookies are small text files stored on your device (computer, smartphone, tablet) when you visit a website. 
      They help the website remember your actions and preferences over time, making your browsing experience more efficient and personalized.`,
    },
    {
      title: 'Types of Cookies We Use',
      description: 'We categorize cookies based on their purpose:',
      subSections: [
        {
          subTitle: 'a. Essential Cookies',
          details: `These cookies are necessary for the website to function properly. 
          They enable core functionalities such as security, network management, and accessibility.`,
          example: 'Example: Authentication cookies that keep you logged in as you navigate the site.'
        },
        {
          subTitle: 'b. Performance and Analytics Cookies',
          details: `These cookies collect information about how visitors use our website, such as which pages are visited most often and if they receive error messages.`,
          example: 'Example: Google Analytics cookies that help us understand user behavior to improve the site.'
        },
        {
          subTitle: 'c. Functionality Cookies',
          details: `These cookies allow the website to remember choices you make (e.g., language preference) to provide a more personalized experience.`,
          example: 'Example: Remembering your preferred language or region.'
        },
        {
          subTitle: 'd. Advertising and Targeting Cookies',
          details: `These cookies are used to deliver advertisements more relevant to you and your interests. They may also limit the number of times you see an ad and help measure the effectiveness of advertising campaigns.`,
          example: 'Example: Cookies from third-party advertising networks like Google Ads.'
        }
      ]
    },
    {
      title: 'How We Use Cookies',
      description: `We use cookies for the following purposes:
        - To Enable Core Functionality
        - To Analyze Usage
        - To Personalize Content
        - To Facilitate Marketing Efforts`,
    },
    {
      title: 'Third-Party Cookies',
      description: `We may allow third-party service providers to place cookies on your device for the purposes outlined above. 
      These third parties may collect information about your online activities over time and across different websites.`,
      example: `Examples of third-party services we use include:
        - Google Analytics: For website performance analysis.
        - Google Ads: For delivering personalized advertisements.`
    },
    {
      title: 'Your Choices Regarding Cookies',
      description: `You have control over how cookies are used on your device. You can adjust your browser settings to:
        - Block Cookies
        - Delete Existing Cookies
        - Manage Preferences`,
      note: `Disabling essential cookies may affect the functionality of our website and limit your ability to use certain features.`,
    },
    {
      title: 'Changes to This Cookie Policy',
      description: `We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.`,
    },
    {
      title: 'Contact Us',
      description: 'If you have any questions or concerns about our Cookie Policy or our use of cookies, please contact us.',
    }
  ];
}
