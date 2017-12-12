import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

export default class TermsOfService extends Component {
  constructor(props) {
    super(props)
    this.state = {
      directToSignup: false,
    }
  }

  handleClose = () => {
    this.setState({ directToSignup: true })
  }

  render() {
    const { directToSignup } = this.state
    const actions = [<FlatButton label="Close" primary={true} onClick={this.handleClose} />]

    if (directToSignup) {
      return <Redirect to="/signup" />
    } else {
      return (
        <Dialog
          title="Merchant Terms of Service"
          actions={actions}
          modal={false}
          open={true}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          <div>
            <p>
              Welcome to SpeedETab! SpeedETab (as defined below) is provided by SpeedETab, Inc. (“we”, “our” or “us”).
              These terms of service (these “Terms of Service”) govern your or the organization that you represent
              (“you,”“your” or “Client”) access to, interaction with and use of the www.SpeedETab.com website and its
              subdomains (the “Website”), downloadable applications we make available to you (collectively, the “App”),
              the mobile devices provided to you by SpeedETab, Inc., and all software and services provided by us via
              the Website and App (collectively, “Services”).
            </p>

            <p>
              SpeedETab enables individuals (“Customers”) to order and pay for items at a bar, coffee shop, restaurant
              or other venue (a “Venue”). As an operator of a Venue, you wish to utilize the Services to enable your
              customers to place orders and pay at your Venue(s), subject to your separate execution of an order form
              with SpeedETab to subscribe to the Services (the “Order Form”). In the event of a conflict between the
              Order Form and these Terms of Service, the Order Form shall take precedence. Each Customer will be
              required to accept separate terms and conditions consistent with these Terms of Service. These Terms of
              Service, together with the Order Form, constitute the “Agreement” between you and SpeedETab, Inc.
              Capitalized terms used but not defined herein shall have the meaning set forth in the Order Form.
            </p>

            <ol style={{ paddingLeft: 10 }}>
              <li>
                <p>Acceptance of Terms. </p>
                <p>
                  IF YOU DO NOT AGREE TO THESE TERMS OF SERVICE, THEN DO NOT USE SPEEDETAB. BY USING SPEEDETAB, YOU
                  HEREBY INDICATE YOUR UNCONDITIONAL ACCEPTANCE OF THESE TERMS OF SERVICE, SUBJECT TO THE TERMS OF YOUR
                  ORDER FORM(S) WITH SPEEDETAB, INC.
                </p>
                <p>
                  We reserve the right to change these Terms of Service from time to time for any reason, which shall be
                  effected by posting of the updated Terms of Service to SpeedETab; provided that any such changes shall
                  only apply to your use of SpeedETab after your then-current subscription expires, unless you expressly
                  accept sooner application of such changes, via a click-through, signed agreement or otherwise.
                </p>
              </li>
              <li>
                <p>Provision and Use of SpeedETab Devices and Services; Client Controls Service to Customers. </p>
                <p>
                  During the Term (as defined below), SpeedETab will supply Client with one or more smart devices, which
                  may be an iPad or similar device, together with any embedded software, as determined by SpeedETab
                  (“Devices”) and provide Client with access to the SpeedETab Platform and related services
                  (collectively, “Services”). Client agrees that Client will use the Services and Device in good faith
                  and will honor all orders received from Customers through the Services to the same extent Client
                  honors such orders when placed by its customers generally on-site at its venue. The software on the
                  Device (“Embedded Software”) is licensed (not sold) and can only be used on the Device and only for
                  the purposes of this Agreement. Client acknowledges that SpeedETab does not confirm the age or
                  identity of any Customers nor monitor consumption by Customers. Client shall comply with all
                  applicable laws, regulations and industry standards for confirming the age of Customers and for
                  limiting the alcohol served to any individual.
                </p>
              </li>
              <li>
                <p>Access. </p>
                <p>
                  a. Hosted Services. The SpeedETab Platform is made available via remotely hosted access during the
                  Term and is licensed and not sold. An “Authorized User” is a person employed by Client, who Client
                  authorizes to use the SpeedETab Platform on behalf of Client, up to a maximum of three (3) Authorized
                  Users unless otherwise approved by Client on a case-by-case basis. Client is solely responsible for
                  all access and use of such login credentials by Authorized Users or any third parties who obtain such
                  login credentials. Customers will be required to accept supplemental terms of use in order to access
                  and use the SpeedETab Platform.
                </p>
                <p>
                  b. Login Credentials. In order to use some functionality of SpeedETab, you will be required to
                  register by providing certain information. We may ask you to complete a registration form and create a
                  user name and password (“Login Credentials”). During any such registration, you are required to give
                  truthful contact information (such as name and email address) in accordance with these Terms of
                  Service. You are responsible for protecting your Login Credentials from unauthorized use, and you are
                  responsible for all activity that occurs on your account (including without limitation financial
                  obligations). You agree to notify us immediately if you believe that your Login Credentials have been
                  or may be used without your permission so that appropriate action can be taken. We are not responsible
                  for losses or damage caused by your failure to safeguard your Login Credentials. All information that
                  you provide through SpeedETab is subject to our Privacy Policy, as may be in effect from time to time.
                  You are responsible for keeping your registration information up to date through your account page, to
                  the extent such feature is made available on SpeedETab.
                </p>
              </li>
              <li>
                <p>Limitations. </p>
                <p>
                  All rights, title, and interest in and to the SpeedETab Platform, Embedded Software, Documentation and
                  Services shall remain vested in SpeedETab and its third party licensors. Other than the express
                  licenses granted herein, no licenses are granted to Client. Client hereby agrees not to (i) decompile,
                  reverse engineer, disassemble, modify, rent, lease, loan, distribute, or create derivative works or
                  improvements of the Devices, Embedded Software, SpeedETab Platform, or any portion of any of the
                  foregoing; (ii) use the SpeedETab Platform in any manner whatsoever except in the manner expressly
                  authorized pursuant to Section 1 or 2 hereof; or (iii) use the SpeedETab Platform in any unlawful
                  manner or for any unlawful purpose.
                </p>
              </li>
              <li>
                <p>Client’s Product Information; Rights in Collected Data. </p>
                <p>
                  Client will provide SpeedETab with accurate, complete and up to date information regarding Client’s
                  venue, events, products and services (“Product Information”), including without limitation hours of
                  operation, menus and similar information. Client is solely responsible for updating the Product
                  Information on the SpeedETab Platform. Client hereby grants SpeedETab the right to display the Product
                  Information on the SpeedETab Platform during the Term and to copy, modify and use the Client Data to
                  provide or improve the Devices, SpeedETab Platform or Services and exploit anonymized versions of the
                  Client Data for its internal and marketing purposes. SpeedETab shall not share data which identifies
                  Client or a Customer without first obtaining Client’s consent.
                </p>
              </li>
              <li>
                <p>Fees and Payments. </p>
                <p>
                  a. Fees. In exchange for the Services, Client shall pay SpeedETab the amounts set forth in the
                  schedule of fees and related terms set forth in the Order Form, as such fee schedule may be amended by
                  mutual written agreement of Client and SpeedETab from time to time.
                </p>

                <p>
                  b. Billing and Payment Policy. We may use a third party payment service to bill you through an online
                  account (your “Billing Account”) for your subscription payment or purchase of products or services in
                  lieu of directly processing your credit card information. By submitting your payment account
                  information, you grant us the right to store and process your information with the third party payment
                  service, which it may change from time to time; you agree that we will not be responsible for any
                  failures of the third party to adequately protect such information. The processing of payments will be
                  subject to the terms, conditions and privacy policies of third party payment service in addition to
                  these Terms of Service. You acknowledge that we may change the third party payment service and move
                  your information to other service providers that encrypt your information using secure socket layer
                  technology (SSL) or other comparable security technology.
                </p>

                <p>
                  c. Customer Payments. If there is an issue with non-payment or under-payment by a Customer, we do not
                  take any responsibility for that issue, and we expect a Customer and a Venue to determine if there
                  will be a refund without SpeedETab’s involvement.
                </p>
              </li>
              <li>
                <p>Term. </p>
                <p>
                  The Term commences upon the Effective Date and will continue until the expiration or termination of
                  the Subscription Period set forth in the Order Form, upon which the Term (and the applicable type of
                  subscription in the Order Form) will renew thereafter for successive one (1) year periods unless
                  either Party provides written notice of termination thirty (30) days prior to the end of the then
                  current period, unless earlier terminated pursuant to the Order Form or these Terms of Service. Either
                  Party may terminate this Agreement for cause if the other Party is in material breach of the
                  provisions of this Agreement and fails to cure such breach within thirty (30) days of such Party’s
                  receipt of notice thereof from the non-breaching Party. Notwithstanding the foregoing, all accrued
                  payment obligations will survive expiration or termination of this Agreement according to their
                  respective terms.
                </p>
              </li>
              <li>
                <p>Device Return; Loss or Damage. </p>
                <p>
                  SpeedETab leases Devices to Client hereunder. Promptly upon expiration or termination of the Term but
                  in any case within no more than ten (10) days after such date, Client shall allow SpeedETab to pick up
                  all Devices. Client shall be responsible for the cost of any Device which is lost by or stolen from
                  Client and for any Device which is returned damaged or inoperable due to misuse or abuse. Any
                  replacement Device shall be subject to the same Term as the replaced Device.
                </p>
              </li>
              <li>
                <p>Acceptance. </p>
                <p>
                  Client hereby agrees to inspect all Devices leased by SpeedETab hereunder and to sign and date a
                  delivery receipt therefor at the time of delivery. Such delivery receipts signed by Client, or
                  Client’s agent or employee, shall constitute proof of delivery and notice in writing, that delivery
                  was made on this specific date, that Client has inspected the Device, accepted it and all terms and
                  conditions of the Agreement prevail. Client must notify SpeedETab of any non-conforming or defective
                  Devices leased hereunder that are being rejected within fifteen (15) days of delivery, otherwise all
                  such Devices will be deemed accepted. All Devices delivered by SpeedETab as a mistake or in excess of
                  quantities leased shall remain SpeedETab’s property. Client agrees to promptly make such Devices
                  available for pick-up by SpeedETab.
                </p>
              </li>
              <li>
                <p>Limited Warranty. </p>
                <p>
                  THE SPEEDETAB PLATFORM AND SERVICES ARE PROVIDED ON AN “AS IS” BASIS, AND CLIENT’S USE OF THE
                  SPEEDETAB PLATFORM AND SERVICES IS AT ITS OWN RISK. SPEEDETAB DOES NOT WARRANT THAT THE SPEEDETAB
                  PLATFORM OR SERVICES WILL BE UNINTERRUPTED, ERROR FREE OR COMPLETELY SECURE. During the one (1) year
                  period (or such shorter period as the manufacturer warrants such Devices) after SpeedETab provides a
                  Device to Client, Client’s sole and exclusive remedy for a Device that materially does not comply with
                  its manufacturer’s specifications will be for SpeedETab to replace, or cause the repair or replacement
                  of, such Device. SPEEDETAB DOES NOT MAKE, AND HEREBY DISCLAIMS, ANY AND ALL EXPRESS OR IMPLIED
                  WARRANTIES, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE, NON-INFRINGEMENT AND WARRANTIES ARISING FROM A COURSE OF DEALING, USAGE OR TRADE PRACTICE. No
                  verbal representation, advertisement, brochure, manual or other document shall modify or otherwise
                  amend this disclaimer. The foregoing limited warranty shall not apply and will be void in the event of
                  an misuse, failure to follow operation or maintenance instructions, tampering, alteration, abuse or
                  damage, whether by Client, its Authorized Users or Customers.
                </p>
              </li>
              <li>
                <p>Limitation and Disclaimer of Liability. </p>
                <p>
                  SPEEDETAB’S MAXIMUM AGGREGATE LIABILITY UNDER THIS AGREEMENT FOR ANY CLAIMS RELATED TO THE DEVICES,
                  THE SERVICES OR THIS AGREEMENT, REGARDLESS OF CAUSE OR ORIGIN OR LEGAL THEORY, TO THE MAXIMUM EXTENT
                  PERMITTED UNDER APPLICABLE LAW SHALL BE LIMITED TO THE FEES PAID BY CLIENT TO SPEEDETAB IN THE
                  THEN-PRECEDING TWELVE (12) MONTHS PRIOR TO ASSERTION OF THE CLAIM. SPEEDETAB SHALL NOT BE LIABLE FOR
                  ANY INDIRECT, CONSEQUENTIAL, INCIDENTAL, MULTIPLE, EXEMPLARY OR PUNITIVE DAMAGES IN CONNECTION WITH
                  THE AGREEMENT OR ANY DEVICES OR SERVICES.
                </p>
              </li>
              <li>
                <p>Indemnification. </p>
                <p>
                  Client hereby agrees to indemnify, defend and hold harmless SpeedETab (and its subsidiaries,
                  affiliates, agents, directors, officers, representatives, partners, managers, successors, assigns and
                  employees) from any costs, damages, claims, demands, proceedings, loss, suit or other liability or
                  expense (including without limitation reasonable attorneys’ fees and court costs) that directly or
                  indirectly arises out of or is in connection with Client's use of the Devices and Services or
                  operation of Client’s business; provided that Client shall not be responsible for claims to the extent
                  such claims arise from SpeedETab’s gross negligence or willful misconduct.
                </p>
              </li>
              <li>
                <p>Ownership of the SpeedETab Platform.</p>
                <p>
                  a. Ownership. You agree and acknowledge that the SpeedETab Platform and all intellectual property
                  rights therein are the sole and exclusive property of SpeedETab.
                </p>

                <p>
                  b. Suggestions. While we welcome your feedback, ideas, and suggestions (collectively, “Suggestions”),
                  it is important to be aware of the following restrictions with regards to your Suggestions. If you
                  send us any Suggestions, you agree that: (1) your Suggestion(s) become our property and you are not
                  owed any compensation in exchange; (2) none of the Suggestion(s) contain confidential or proprietary
                  information of any third party; (3) we may use or redistribute Suggestion(s) for any purpose and in
                  any way; (4) there is no obligation for us to review your Suggestion(s); and (5) we have no obligation
                  to keep any Suggestions confidential.
                </p>
              </li>
              <li>
                <p>No Assignment. </p>
                <p>
                  Client shall not assign, sublease or transfer any of its rights under this Agreement to any third
                  party, without SpeedETab’s consent. Any attempted assignment in breach of the foregoing shall be void.
                </p>
              </li>
              <li>
                <p>Amendments; Integration; Waiver. </p>
                <p>
                  This Agreement may not be amended, modified or supplemented or any of the provisions waived unless in
                  writing and signed by the Party against whom the same is sought to be enforced. This Agreement
                  constitutes the entire agreement and understanding of the parties hereto in respect to the subject
                  matter hereof and supersedes all prior agreements and understandings, written or oral, between the
                  parties with respect to such subject matter. The waiver of any right or default in any instance
                  hereunder shall not be deemed to be a waiver of any future right or breach of hereunder.
                </p>
              </li>
              <li>
                <p>Severability; Remedies. </p>
                <p>
                  If any provision of this Agreement is held to be invalid, illegal or unenforceable by a court of
                  competent jurisdiction, such provision will be deemed restated, in accordance with applicable law, to
                  reflect as nearly as possible the original intentions of the Parties, and the remainder of the
                  Agreement will remain in full force and effect.
                </p>
              </li>
              <li>
                <p>Governing Law and Jurisdiction. </p>
                <p>
                  This Agreement shall be governed by and construed in accordance with the laws of the Commonwealth of
                  Massachusetts, without giving effect to conflicts of law rules. The parties consent to the exclusive
                  jurisdiction of the federal and state courts located in Boston, Massachusetts, except that either
                  party may seek equitable relief in any jurisdiction.
                </p>
              </li>
              <li>
                <p>Links to Third-Party Websites. </p>
                <p>
                  SpeedETab may contain links to third party websites. These links are provided to you as a convenience,
                  and we are not responsible for the content of any linked third party website. Any third party website
                  accessed from SpeedETab is independent from us, and we have no control over the content of that
                  website. In addition, a link to any third party website does not imply that we endorse or accept any
                  responsibility for the content or use of such website. Use of any third party site is subject to its
                  terms of service and privacy policy. We request that Users exercise caution and good judgment when
                  using third party websites.
                </p>
              </li>
              <li>
                <p>For Additional Information.</p>
                <p>
                  If you have any questions about these Terms of Service, please contact us at contact@speedetab.com or
                  via www.speedetab.com.
                </p>
                <p>Copyright © 2015, SpeedETab, Inc., All Rights Reserved. </p>

                <p>Updated: February 1, 2015</p>
              </li>
            </ol>
          </div>
        </Dialog>
      )
    }
  }
}
