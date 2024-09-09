import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-of-use',
  templateUrl: './terms-of-use.component.html',
  styleUrl: './terms-of-use.component.css'
})
export class TermsOfUseComponent {
  termsAndConditions = [
    {
      title: 'Introduction',
      content: [
        'Welcome to Reydon Resources Private Limited! By accessing and using our website, you agree to comply with the following terms and conditions.',
        'Please read this agreement carefully before using our services.'
      ]
    },
    {
      title: 'Acceptance of Terms',
      content: [
        'By using our website, you acknowledge that you have read, understood, and accepted these terms.',
        'If you do not agree with any part of these terms, please refrain from using our services.'
      ]
    },
    {
      title: 'Use of Website',
      content: [
        'You may use our website for informational purposes, subject to these terms.',
        'Unauthorized use or modification of content is strictly prohibited.',
        'We reserve all rights to remove or edit unauthorized contents post by visitors such as illegal, defamatory, threatening, infringing of intellectual property rights, software viruses, political campaigns, and commercial solicitation, invasive of privacy, or injurious in any other way to third parties.'
      ]
    },
    {
      title: 'Intellectual Property',
      content: [
        'All original content, trademarks, and intellectual property on our website belong to Reydon Resources Private Limited.',
        'You may not reproduce, distribute, or use our content without our permission.'
      ]
    },
    {
      title: 'Disclaimer',
      content: [
        'While we strive for accuracy, information on our website may change over time.',
        'Reydon Resources Private Limited is not liable for any errors or omissions.'
      ]
    },
    {
      title: 'Privacy Policy',
      content: [
        'Our privacy practices are outlined in our separate Privacy Policy.',
        'By using our website, you consent to our data practices.'
      ]
    },
    {
      title: 'Governing Law',
      content: [
        'These terms are governed by the laws of Tamil Nadu, India.',
        'Any disputes will be subject to the exclusive jurisdiction of the courts in Tamil Nadu.'
      ]
    },
    {
      title: 'Contact Us',
      content: [
        'For any inquiries or concerns, please contact us at reydonrpl@gmail.com.'
      ]
    }
  ];
}
