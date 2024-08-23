import { Component } from '@angular/core';

@Component({
  selector: 'app-our-values',
  templateUrl: './our-values.component.html',
  styleUrl: './our-values.component.css'
})
export class OurValuesComponent {

values=[
  {
    id:'1',
    Title:'Integrity',
    ValueText:'We conduct our business with the highest ethical standards, ensuring honesty and fairness in every transaction.',
    image:'fas fa-handshake'
  },
  {
    id:'2',
    Title:'Customer Focus',
    ValueText:'Our clients are at the heart of everything we do. We listen to your needs and work tirelessly to meet them.',
    image:'fas fa-users'
  },
  {
    id:'3',
    Title:'Innovation',
    ValueText:'We leverage the latest technology and market insights to provide you with the best possible service.',
    image:'fas fa-lightbulb'
  },
  {
    id:'4',
    Title:'Community',
    ValueText:'We are proud to be part of the real estate community and are committed to giving back through various initiatives and partnerships.',
    image:'fas fa-building'
  },
  {
    id:'5',
    Title:'Transparency',
    ValueText:'We believe in open and honest communication with our clients.',
    image:'fas fa-bullhorn'
  },
  {
    id:'6',
    Title:'Excellence',
    ValueText:'We are committed to delivering top-notch services and achieving outstanding results.',
    image:'fas fa-award'
  },
]

}
