import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Page from '../views/Page.vue';
import Offer from '../views/Offer.vue';

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/publisher',
    name: 'Publisher',
    component: () => import('../views/Publisher.vue'),
    props: true
  },
  {
    path: '/advertiser',
    name: 'Advertiser',
    component: () => import('../views/Advertiser.vue'),
    props: true
  },
  {
    path: '/register',
    name: 'Registration',
    component: () => import('../views/Registration.vue'),
    props: true
  },
  {
    path: '/about-us',
    name: 'About Us',
    component: () => import('../views/About.vue'),
    props: true
  },
  {
    path: '/cookies',
    name: 'Cookie policy',
    component: Page,
    props: {
      title: 'Cookie policy',
      content: `<h2>WHAT IS A COOKIE FILE</h2>
      <p> Cookies are small text files or small pieces of data that are downloaded to your computer or mobile device(such as a smartphone or tablet) when you visit websites.Cookies usually contain the name of the site from which they were received, the "expiration date" of the cookie(ie how long they remain on the device) and a unique number that is randomly generated. </p> 
      <h2>WHY WE NEED COOKIE FILE</h2> 
      <p>We use cookies to make our Sites easier to use and to adapt the content of the Site to the user 's preferences. Websites are able to read and place cookies, which allows them to recognize the user and remember important information about the user to make the sites easier to use (for example, remembering preferred settings).</p>
      <p>The general purpose of using cookies is as follows:</p> 
      <ul>
        <li>Technical cookies are designed for ensuring the quality of the website and for the convenience of the users so that you can connect to your account and the website will work smoothly.</li>
        <li>Functional cookies are designed to make it easier for users to visit a website, for example, remembering the language of the website you selected, the services or items of interest and other things that make the website run faster and more convenient for you in the long run.</li>
        <li>Analytical cookies are designed to give us an insight into our visitors ' activities on our website, which allows us to find out the pros and cons of the site and what needs to be changed in the content or technical solutions of the website.</li> 
      </ul>
      <p> Cookies are not used to personally identify you, we cannot personally identify the user based on this information. </p>
       <p> If you want to delete all cookies already stored on your computer or disable cookies that follow your activities on the website, you can do so by deleting existing cookies and / or changing your browser privacy settings to block the use of cookies </p>`
    }
  },
  {
    path: '/public',
    name: 'Public offer',
    component: Page,
    props: {
      title: 'Public offer',
      content: `
        <p>This Offer provides the conditions of execution of the Information Services Agreement (hereinafter referred to as Services Agreement/or Agreement). In case the Agent performs the actions, indicated in this Offer, this confirms their consent to enter into the Agreement within the scope and on conditions, described in this Offer.
        The Offer’s text below is addressed to natural persons by the official public offer UAB "Lidso finansai" to enter into the Services Agreement according to Article 6.171 of the Civil Code of the Lithuanian Republic. Services Agreement is considered to be entered and becomes effective as of moment the Agent performs the actions, listed in this Offer, which means an unconditional acceptance by the Agent of all te conditions of this Offer with no exceptions and restrictions on conditions of accession.</p>

        <p>
        This version of the Offer is available at the Service website at the following email address: ms@akamuro.com
        </p>

        <p>
        1. Definitions
        <p>
        <p>
        1.1. Client – UAB "Lidso finansai", legal entity code 305241175, office address Lithuania, Vilniaus m. V.Nageviciaus g.3
        <p>

        <p>1.2. System &ndash; software apparatus complex (computer application), which belongs to the Client, including a program available to users on the website: https://akamuro.com/ billing system, Personal cabinet of Web-master and other software, databases and intellectual property, including other software modules, providing automation of interaction between the Client and the Agent.</p>

<p>1.3. Web-master and/or Agent &ndash; natural person, who has skills and technical means to advertise goods (services) in information telecommunication network of Internet, interested in the performance of advertising campaigns, proposed by advertisers.</p>

<p>1.4. Advertiser &ndash; natural person or legal entity, determining the conditions of Offers and providing the right to advertise their goods and/or services using advertising materials in information telecommunication network of Internet.</p>

<p>1.5. Offer &ndash; a task to post Advertising materials on the Internet, which contain a certain number of conditions, which the Agent must comply with while posting Advertising materials on the Internet.</p>

<p>1.6. Paid action &ndash; actions, indicated in a respective Offer, which occurred as a result of posting Advertising materials on the Internet by Web-master and for which Web-master shall be compensated for in the amount, determined in a respective Offer.</p>

<p>1.7. Space &ndash; website in information telecommunication network of Internet, belonging to Web-master (under administration of Web-master) or website where Web-master has the right to post advertising materials on.</p>

<p>1.8. Advertising materials &ndash; text (links), visual (banners) and other advertising materials, posted in information telecommunication network of Internet.</p>

<p>All other terms and definitions in this text shall be interpreted by the Parties according to the laws of the Lithuanian Republic and common interpreting rules on the Internet.</p>

<p>2. Subject Matter</p>

<p>2.1. In the manner and on conditions determined in the agreement, the Agent, using the System, shall provide the Client with information services on the Internet , the list of which is provided below, whereas the Client shall ensure the operation of the System, accept duly provided services and pay for them in the amount, determined in this Agreement.</p>

<p>2.2. The list of services and works which may be provided (performed) by the Agent within the scope of this Agreement, and their material features shall be posted in the Personal cabinet of the Agent.</p>

<p>2.3 All of the services and works, existing at the present moment, as well as any development and/or addition of the new ones shall constitute subject matter of the Agreement.</p>

<p>2.4. The use of the Systems&rsquo; services is regulated by this Agreement and the Confidentiality Policy.</p>

<p>3. The Procedure of Offer Execution. Registration and Personal Room of Agent.</p>

<p>3.1. The Agreement is considered to be executed as of moment the Client receives information about the acceptance of the public offer by the Agent.</p>

<p>3.2. The acceptance (full and irrevocable) of conditions of this offer is the performance of any of the following actions by the Agent:</p>

<p>- registration in the System and confirmation of the fact of reading and agreeing to the conditions of the public offer by means of filling out information in the registration form;</p>

<p>- confirmation of the fact of reading and agreeing to conditions of the public offer by means of the existing functional in the Personal cabinet;</p>

<p>- using any of the services or their separate functions by the Agent.</p>

<p>In case the Agent does not agree with any of the provisions of the Agreement, the Agent may not use the services of the System. In case the Client makes any modifications to this Agreement, which the Agent does not agree with, the Agent shall stop using the System. The relations, during the period when the Agent was using the System, shall be regulated by the provisions of this Agreement, unless otherwise determined additionally.</p>

<p>3.3. In order to use the services of the System or some of the separate functions of the services, the Agent shall register and create an account &ndash; their Personal cabinet.</p>

<p>3.4. During registration the Agent shall provide accurate information in all fields and shall keep this information updated at all times.</p>

<p>3.5. The Agent shall provide the Client with the right to process information of the Agent according to the conditions of this Agreement, independently as well as engaging third parties. Personal information of the Agent, contained in the Personal cabinet, is stored and processed by the Client according to the conditions of the Confidentiality policy.</p>

<p>3.6. Upon registration the Agent shall independently select login (Agent&rsquo;s email) and password to access the account. The Client may determine the requirements to a password (length, allowed symbols, etc.)</p>

<p>3.7. The Agent shall be solely responsible for security (resistance to guessing) of the selected unique identification data, as well as solely ensure their confidentiality.</p>

<p>3.8. The Agent shall be solely responsible for any actions (and their consequences) while using the System under their account, including the cases of voluntary transfer of login data to access their account to third parties on any conditions (including agreement or consent). All of the actions in the System through personal cabinet of the Agent are considered to be completed on behalf of the Agent, except cases, when the Agent, according to provisions of Paragraph 3.9., informed the Client about the unauthorized access to the System with their login information and/or on any breach (suspicion of such breach) of confidentiality of their login information (password).</p>

<p>3.9. The Agent shall immediately inform the Client about any unauthorized access (not allowed by the Agent) to services of the System using their account information and/or about any violation (suspicion of such violation) of confidentiality clause, and about &#1072;ny other failures or defects of the System. For the purposes of maintaining security, the Agent shall solely finish their session by properly logging out of their account (&laquo;Exit&raquo; button). The Client shall not be responsible for any loss or damage of data, as well as other consequences of any nature, which may be caused by a breach of any of the provisions of this Paragraph by the Agent. In case of any actions listed in this Paragraph the Client may undertake measures to eliminate them within 5 (five) business days after the receipt of notification from the Agent.</p>

<p>3.10. The Client, with no prior notification, may block or delete Agent&rsquo;s account and delete any content without a reason in case the Agent violates the provisions of this Agreement or if the Client believes that the content and the nature of information violate the current laws of the Lithuanian Republic, are obscene and offensive, violate the rights and the legal interests of other citizens, also the account may be deleted at the request of the Agent.</p>

<p>3.11. After the registration, Web-master receives access to a personal cabinet. In a personal cabinet Web-master receives access to Offers, statistics, technical instruments and financial information. To access certain Offers Web-master may be required to disclose detailed information about the Sources of traffic and/or consent of the Advertiser to provide access to an Offer. None of the provisions of this Agreement obligates to provide Web-master with an access to all Offers, posted in the System.</p>

<p>3.12. Web-master is obligated to thoroughly review the conditions of the Offers and refer to the conditions of the Offers from time to time before posting Advertising materials on the Internet within the entire term of posting Advertising materials on the Internet. Web- master agrees that the failure to abide by this requirement shall cause suspension of access of Web-master to a certain Offer, and in case such failure to perform obligations by Web- master causes damages to the Client or the Advertiser - suspension of Web-master&rsquo;s access to the System, such damages may be deducted from the Web-master&rsquo;s account.</p>

<p>3.13. In respect to any Offer, chosen by Web- master, they are provided a limited territory, specified in the Offer, unexclusive, revocable right to post Advertising materials on the Internet. Modification of the Advertising materials by Web-master is not allowed. Web-master shall not use Advertising materials, prepared by Web-master, except cases, if the development of Advertising materials by Web- master is permitted by an Offer. Web-master agrees that failure to perform this obligation may cause suspension of their access to a respective Offer, and in case such failure to perform an obligation by Web-master causes damages to the Client or the Advertiser, suspension of Web-master&rsquo;s access to the System, such damages may be deducted from the Web-master&rsquo;s account.</p>

<p>3.14. Web-master agrees that in case Web- master breaches the provisions of this Agreement, the Web-master&rsquo;s access to the System may be restricted at any time with no additional notification of Web-master.</p>

<p>4. Rights and Responsibilities of the Parties</p>

<p>4.1. The Agent shall:</p>

<p>4.1.1. comply with all of the requirements of the Client and the Advertiser in respect to posting Advertising materials. The Agent shall be responsible for all of the expenses and fees required to attract users, including: fees to post Advertising materials and other actions, which are necessary to perform this Agreement.</p>

<p>4.1.2. not change or modify Advertising materials, except cases, when the Client has provided a prior written consent.</p>

<p>4.1.3. At the time of the development, manufacturing, use and administration of Advertising materials within the scope of this Agreement according to an Offer, the Agent shall not breach the requirements of the effective laws of the Lithuanian Republic (including, but not limited to the provisions of the Law of the Lithuanian Republic on Advertising and the Regulation on General Date Protection), shall not allow the breach of rights to the results of the intellectual activity and the similar means of individualization of any third parties and the Client.</p>

<p>4.1.4. Immediately transfer all of the data via API-protocol, filled out by a User in Advertising materials within the scope of services under this Agreement.</p>

<p>4.1.5. Regularly review statistics, provided by the Client. The Agent agrees that the only source of statistics, based on which the final settlement will calculated, is the source in the System.</p>

<p>4.1.6. not use prohibited sources and types of traffic.</p>

<p>4.1.7. not violate the rules of using the System.</p>

<p>4.1.8. not post Advertising materials on web- pages on the Internet containing materials, violating generally accepted standards of decency (erotic and pornographic materials), and materials containing abusive and aggressive content and images of violating law. In case the Agent or the Client find out that the administrator (owner) of a website violates this provision, the Agent shall immediately take away Advertising materials from such website.</p>

<p>4.1.9. not post Advertising materials (own and the Client&rsquo;s ones) in any context, which may cause harm to the Client or the Advertiser;</p>

<p>4.1.10. not to incorporate any programs into Advertising materials, which may control user&rsquo;s computer, which may not be closed without turning off a computer or closing all of the sessions of an internet browser; not to install any additional software onto user&rsquo;s computer without the consent of the computer owners, not to use any methods and means of forceful transactions (for example, forceful click, coercion to send a paid message, etc.)</p>

<p>4.1.11. not to use the System improperly, directly or indirectly, that is not to interfere with its operation and not to attempt to access it in ways other than via standard interface and existing instructions as well as not to engage in actions, aimed at compromising network security or interfering with operation of software and technical means of the System. If this provision is violated or in case such violation is suspected, the Client may suspend or entirely block the Agent&rsquo;s access to the System.</p>

<p>4.1.12. Not to reproduce, copy, sell and use any party of the System&rsquo;s services for any commercial purposes (including content, available to the Agent via services), or access to them, except cases, when the Agent has received a permit from the Client.</p>

<p>4.1.13. use personal data of users, received with the help of Advertising materials, only for the purposes of providing services within the scope of this Agreement.</p>

<p>4.1.14. Store, ensure, use, systemize, process, impersonalize, transfer and delete received user data according to the requirements of the effective laws of the Lithuanian Republic on Personal Data Security;</p>

<p>4.1.15. not to store, process, or transfer to anybody, or in any other way different from the ones listed above, use, including personal purposes without receiving income, received user information.</p>

<p>4.1.16. not to send advertising information via email or sms-messaging to users using the Client&rsquo;s database.</p>

<p>4.1.17. immediately inform the Client about all of the circumstances, which may influence the performance of this Agreement by the parties by means of sending a message in the System or via email at: ms@akamuro.com.</p>

<p>4.1.18. In case of a planned suspension of work of a Space, inform the Client about this within 72 (seventy-two) hours by means of sending a message in the System.</p>

<p>4.1.19. not to provide data from a System&rsquo;s report to any third parties.</p>

<p>4.2. The Agent has the following rights:</p>

<p>4.2.1. ask the Client about any additional information, required to provide the services under this Agreement.</p>

<p>4.2.2. maintain own statistics of an advertising campaign, on the basis of which the Agent has the right to argue the calculation of the compensation for advertising campaign but only in case of a deviation at the Client&rsquo;s fault.</p>

<p>4.2.3. refuse to post Advertising materials in case if activity, advertised by means of posting Advertising materials, contradicts the laws of the Lithuanian Republic, including any signs of improper advertising and (or) which doesn&rsquo;t comply with the generally accepted moral and ethical standards.</p>

<p>4.2.4. involve third parties to perform the conditions of this Agreement. The Agent shall be responsible to the Client for actions (failure to act) of the involved third parties, as well as for failure to perform or improper performance of their respective obligations under this Agreement. The Agent shall pay for the services of the involved third parties.</p>

<p>4.3. The Agent must not:</p>

<p>4.3.1. download, send, transfer or in any other way post and/or distribute content, which is illegal, malicious, slanderous, humiliating, demonstrates (or is a propaganda of) abusive behavior, violates IP rights, encourages hatred and/or discrimination of people, insults individuals or organization, contains elements (or is a propaganda of) application or</p>

<p>other use of drugs or their analogs, explosives or other weapons; other elements, contradicting the laws of the Lithuanian Republic.</p>

<p>4.3.2. download, send, transfer or in any other way post and/or distribute content if the Agent does not have proper rights to act so according to the laws or any contract relations.</p>

<p>4.3.3. download, send, transfer or in any other way post and/or distribute materials which contain viruses or other computer codes, files or programs aimed at violation, deletion or restriction of functioning of any computer or telecommunication equipment or programs, or illegal access.</p>

<p>4.3.4. illegally collect and store personal data of other persons.</p>

<p>4.3.5. misrepresent oneself as a different individual or a representative of an organization and/or group with no proper rights to do so, for example to represent oneself as the Client&rsquo;s employees, moderators, website owner, as well as apply any other forms and means of illegal misrepresentation in the network, and to mislead other Agents or the Client regarding the features and characteristics of any subjects or objects.</p>

<p>4.3.6. disturb a normal functioning of the services of the System.</p>

<p>4.3.7. assists in actions, aimed at breaching limitations and restrictions, determined by the Agreement.</p>

<p>4.3.8. violate the conditions of this Agreement and the effective laws of the Lithuanian Republic in any other way.</p>

<p>4.4. The Client shall:</p>

<p>4.4.1. pay for the Services of the Agent according to the conditions of this Agreement.</p>

<p>4.4.2. maintain normal operation of the Service.</p>

<p>4.4.3. timely provide the Agent with all of the information, required for the Agent to provide the services under this Agreement. Inform the Agent about all modifications, related to previously provided Advertising materials and information.</p>

<p>4.4.4. process received personal data according to the requirements of the effective laws of the Lithuanian Republic on Personal Data Protection.</p>

<p>4.5. The Client has the following rights:</p>

<p>4.5.1. modify the Advertising materials at any time at their own discretion.</p>

<p>4.5.2. have the Agent suspend providing the services under this Agreement due to technical, technological and other reasons, preventing the rendition of services for the period needed to eliminate such reasons.</p>

<p>4.5.3. to unilaterally refuse to perform the Agreement notifying the Agent about this within 5 (five) business days before the termination. In this case the Agreement is considered to be terminated after these 5 business days. The final settlement for the services shall be done after the screening process and shall be paid in full;</p>

<p>4.5.4. modify the rates for the services.</p>

<p>4.5.5. to unilaterally make changes in the System, for example to change or add chapters, change the design, functional settings, etc.</p>

<p>5. The Amount of Compensation and Payment Procedure</p>

<p>5.1. The Agent shall receive compensation from the Client, which directly depends on the success of their advertising campaigns.</p>

<p>5.2. The Agent shall receive compensation for Paid operations, performed in the course of posting Advertising materials by the Agent on the Internet.</p>

<p>5.3. The Agent&rsquo;s compensation is calculated according to the conditions on price of a Paid operation, stated in a respective Offer and the number of completed Paid operations. The Agent agrees that the price of a Paid operation may vary from time to time. To calculate the Agent&rsquo;s compensation a price of a Paid operation will be applied, effective at the moment said Paid operation is completed. The Agent agrees that the calculation of the number of completed Paid operations is done based on data of the Client&rsquo;s billing system.</p>

<p>5.4. For the purposes of making a payment, the Agent in their Personal Cabinet shall indicate the information of their account and select one preferred method of payment. The Agent shall be responsible for the accuracy of information, stated in their Personal Cabinet. If the bank information is not accurate or it is impossible to make a payment using that information, the Agent shall compensate the Client the amount of commission, bank expenses, and any other damages incurred due to the failed payment, as well as the money transfer onto the corrected bank account of the Agent. Said amount shall be deducted from the Agent&rsquo;s payment.</p>

<p>5.5. The Agent shall solely indicate the interval between compensation payments in their Personal Cabinet. The minimum amount of compensation, available for payment, is</p>

<p>(100) EUR.</p>

<p>5.6. The Agent&rsquo;s compensation may be paid to the Agent, at the Agent&rsquo;s discretion, by means of any electronic payment systems, available in the System, provided that the Agent has an account in a payment system, servicing electronic payments.</p>

<p>5.7. The Agent agrees that the compensation, determined according to the requirements of this Paragraph, is full and final, any expenses which the Agent may incur due to posting Advertising materials on the Internet, shall not be compensated for to the Agent. Expenses related to the payment of compensation are included in the amount of compensation.</p>

<p>5.8. The Agent acknowledges and agrees that due to technical reasons the payment of their compensation may be delayed, and there should not be any late fees included for the entire period of delay for using somebody&rsquo;s money or any penalties. The Agent acknowledges and agrees that in case the Agent violates the conditions of the Offers while posting Advertising materials, the payment of the compensation may be postponed for a period during which the Client investigates the fact of said violation. In case the Agent is paid their compensation but is not entitled to it, due to violation of this Agreement, the Agent shall immediately return said compensation upon the first request. Such compensation may be credited against any subsequent compensation, which the Agent may be entitled to in the future, and the amount of such compensation may also be deducted from the Agent&rsquo;s balance.</p>

<p>5.9. The settlement under this Agreement shall be done in EUR. In case the amount of compensation is determined in a foreign currency, the currency exchange rate of the Lithuanian bank shall be applied as of date of a payment.</p>

<p>6. The Conditions of Using the System</p>

<p>6.1. The Client posts in the System (or informs the Agent in any other way) information and methodic materials, describing the opportunities and the procedure of using the System. If otherwise is not explicitly agreed with the Client, such materials are auxiliary, and the Client does not guarantee their accuracy.</p>

<p>6.2. At the time of planned prophylactic measures and technical maintenance, which may cause inadequate operation and prolonged breaks in the System&rsquo;s functioning, the Client shall notify the Agent in advance within 24 (twenty-four) hours. This term for notification may decrease only in exceptional cases, when it is needed by the requirements of the information security and the reliability of functioning of the service system.</p>

<p>6.3. Any notifications under this Agreement may be forwarded by one Party to the other via the System. The Client shall review any of the Agent&rsquo;s inquiries within 72 (seventy-two) hours, unless other term is stated in this Agreement.</p>

<p>6.4. The Client posts messages (notifications) in the System, as well as forwards them to the Agent&rsquo;s email, stated in the System. The Agent shall regularly (at least once a month) check for any messages (notifications) sent to them in the System, as well as to ensure that the email address is current and up-to-date.</p>

<p>7. Intellectual Rights and License</p>

<p>7.1. Exclusive rights to the intellectual product, included into Offers, provided Advertisers, belong to respective Advertisers and rightholders.</p>

<p>7.2. The Client provides the Agent with the right to use the Service (simple (inclusive) license), the exclusive rights to which belong to the Client, with no right of their transfer by the Agent, no sublicensing.</p>

<p>7.3. The term of simple (inclusive) license to use the Service is the term of the exclusive right to the Service. Upon the termination or expiration of this Agreement the Agent loses their right to use the Service. The Client may at any time terminate this Agreement with no reason, terminating the User&rsquo;s right to use the Service.</p>

<p>8. Warranties and Liability Limitations</p>

<p>8.1. The Agent hereby warrants:</p>

<p>8.1.1. the services, provided to the Client in the course of performing this Agreement, &#1089;omply with the requirements of the effective laws of the Republic of Lithuania;</p>

<p>8.1.2. the information, provided to the Client in the course of performing this Agreement has been received according to the requirements of the effective laws of the Republic of Lithuania. In case the Agent violates the requirements of the current laws of the Lithuanian Republic (including but not limited to the provisions of the Law of the Republic of Lithuania on Advertising and the Regulation on Data Protection) in respect to data of user, the information about which is stored in the Client&rsquo;s database, the Agent shall be fully responsible. In such cases the Agent shall act as a defendant in court, a party at fault in administrative proceedings, etc.</p>

<p>8.2. The Agent uses the services of the System at their own risk. The Client shall not be responsible for any damages resulting from the Agent&rsquo;s use of the System&rsquo;s services or separate parts/functions of the services.</p>

<p>8.3. The Parties shall be responsible for failure to perform or inadequate performance of their respective obligations under this Agreement within the amount of damages, caused by such failure to perform or inadequate performance, unless otherwise is provided in this Agreement. The Parties shall not be responsible to each other for indirect damages and lost profit, caused by actions of the other Party while providing the services. The scope of responsibility of the Client under this Agreement is limited to the cost of services in a reporting period, during which the Client breaches his obligations under this Agreement, which causes damages to the Agent.</p>

<p>8.4. The Parties shall not be liable for partial or full failure to perform their respective obligations under this Agreement if it was due to force majeure circumstances. Force majeure circumstances include acts of God, precluding one of the Parties to adequately</p>

<p>perform their obligations under this Agreement, including (but not limited to) resolutions of governmental agencies, wars, civil disturbances, strikes, natural disasters and catastrophes of anthropogenic nature, specifically: accidents (interruptions in work, failures) in electric and computer networks or other systems, used for functioning of the System, as a result of intentional illegal actions of third parties or any other actions, aimed at disruption of the System&rsquo;s functioning. The Party, which suffered from intentional interference of their performance, shall within 5 (five) business days notify the other Party in writing via email about such event, its estimated duration and termination of said circumstances. Failure to inform or untimely notification deprives the Party of the right to cite any of the above circumstances as grounds, releasing from responsibility for failure to perform obligations.</p>

<p>8.5. Due to the fact of using computer and other equipment, communication channels and (or) computer applications and programs of third parties, the Parties agree that the Client under this Agreement shall not be responsible for any delays, interruptions, direct or indirect damages resulting from the defects of any of the electronic or mechanic equipment and (or) computer programs, or because of other objective technological reasons, as well as due to actions or failure to act of third parties, issues while transmitting data or connection, power failures, which are not caused by the Client&rsquo;s actions.</p>

<p>8.6. The Client shall not be responsible for breach of rights of third parties, caused by the Agent&rsquo;s actions while using the System, provided by the Client.</p>

<p>8.7. Any information about commercial activity, new solutions and technical tasks, received by a Party in the course of performance of this Agreement is confidential and shall not be disclosed to third parties without a written consent of the other Party, except cases, determined by the laws.</p>

<p>9. Dispute Resolution</p>

<p>9.1. Any disputes arising out of and in connection with this Agreement shall, if possible, be resolved by means of negotiation.</p>

<p>9.2. Compliance with prejudicial (claims based) regulation and resolution of disputes is mandatory. The term to answer the claim is 15 (fifteen) business days as of moment of its receipt by the Party.</p>

<p>9.3. In case if the Parties cannot resolve the dispute, it shall be submitted for court review and resolution according to the requirements of the current laws of the Republic of Lithuania at the Client&rsquo;s location.</p>

<p>10. The Procedure of Modifying and Amending the Agreement. Agreement Termination.</p>

<p>10.1. This Agreement shall become effective as of moment of its publication on the Internet at the Client&rsquo;s website and shall remain in effect until the offer is withdrawn by the Client or in case of a new edition of the Agreement.</p>

<p>10.2. The provisions of this Agreement, as well as its subsequent editions, are mandatory for all Agents, including previously registered ones.</p>

<p>10.3. The Client may unilaterally make modifications and (or) additions to this Agreement.</p>

<p>10.4. Modifications and (or) additions to this Agreement, made by the Client at their discretion, shall become effective as of moment of their publication in the System, unless a different term is not stated additionally upon their publication.</p>

<p>10.5. In case any of the provisions of the Agreement is rendered invalid and unenforceable, the rest of its provisions shall remain in effect. Invalidity of any of the provisions of the Agreement shall not affect the validity of other provisions of the Agreement.</p>

<p>10.6.The text of modifications and/or additions to this Agreement and its new edition shall be brought to general attention by the Client by means of publishing a respective notification in the System. The Client may change the Agreement with no special notification. The effective edition of the Agreement can be located at the following webpage https://akamuro.com/.</p>

<p>10.7. In case this Agreement terminates for any reason, the Agent shall immediately stop using any Advertising materials and delete them from their Platforms.</p>

<p>11. Final Provisions.</p>

<p>11.1. This Agreement is governed and interpreted by the laws of the Republic of Lithuania. Any other matters, not explicitly regulated in this Agreement, shall be resolved according to the laws of the Republic of Lithuania.</p>

<p>11.2. Nonfeasance on the part of the Client in case the Agent or other users breach the provisions of the Agreement does not deprive the Client of the right to undertake the respective actions to protect the Client&rsquo;s rights, also it does not mean that the Client waives their rights in case of any subsequent and similar violations.</p>

<p>11.3. The Client may, at their discretion at any time and with no prior notification of the Agent, transfer their rights and responsibilities, arising out of this Agreement, partially or entirely, to any third party.</p>

<p>11.4. The Client shall not undertake any obligations than those explicitly stated in the Agreement except those cases when such obligations are recorded in writing and signed by the Agent and the Client.</p>

<p>11.5. The Agent, using the Service, unconditionally and fully agrees with the conditions and the requirements, stated in this Agreement.</p>

<p>Date of publication: 01.01.2021</p>

           `
    }
  },
  {
    path: '/policy',
    name: 'Privacy policy',
    component: Page,
    props: {
      title: 'Privacy policy',
      content: `
      <p>
      This Privacy Policy explains how (UAB "Lidso finansai", legal entity code 305241175)(hereinafter – “Akamuro”, “us”,
      “our”) processes your personal data when youregister to Akamuro as a publisher, visit our website and contact us in
      any
      other way,as well as explains how this data is used and what rights you have.
  </p>
  
  <h2>
      PERSONAL DATA WE PROCESS
  </h2>
  
  <p>
      In order to provide our services and the possibility for the publishers to register onAkamuro platform, contact us,
      receive commission and subscribe to our marketinge-mails, we require certain personal data.
  </p>
  
  <p>
      We collect and process the following personal data, which you provide:
  </p>
  
  <ul>
      <li>Name and last name;</li>
      <li>Country;</li>
      <li>Telephone number;</li>
      <li>Skype name;</li>
      <li>IP address;</li>
      <li>E-mail address;</li>
      <li>Banking details.</li>
  </ul>
  
  <p>
      We may receive your personal data from our website (the used device, type ofbrowser, Geo IP, time and date of site
      visit). For more information see our CookiePolicy.
  </p>
  
  <p>
      We also process any information that you provide to Akamuro when youcommunicate with us using our contact e-mail
      address or reaching out to yourpersonal manager or in any other way.
  </p>
  
  <h2>
      PURPOSE OF PROCESSING
  </h2>
  
  <p>
      We process the above-mentioned data for the following purposes:
  </p>
  
  <ul>
      <li>Name,</li>
      <li>last name,</li>
      <li>country,</li>
      <li>telephone number,</li>
      <li>skype name,</li>
      <li>e-mail address</li>
  </ul>
  
  <p>
      are processed to register a new publisher in our platform, communicate with thepublisher, ensure customer service
      and support and provide the possibility to use ourservices and receive commission
  </p>
  
  <p>
      Banking details are processed for the purpose to make payment transactions, if apublisher is entitled to receive
      commission in accordance with our Terms andConditions;
  </p>
  
  <p>
      IP address and site data are processed for analytical purposes in order to improveclients’ experience when visiting
      our website and using the affiliate program;
  </p>
  
  <p>
      If you have signed up to receive our marketing e-mails, we will process your e-mailaddress in order to send you such
      communication
  </p>
  
  <h2>
      LEGAL BASIS FOR PROCESSING
  </h2>
  
  <p>
      We process personal data in accordance with the applicable data protection laws,including Regulation (EU) 2016/679
      of the European Parliament and of the Council of27 April 2016 on the protection of natural persons with regard to
      the processing ofpersonal data and on the free movement of such data, and repealing Directive95/46/EC (“GDPR”).
  </p>
  
  <p>
      The legal basis for processing data is:
  </p>
  
  <ul>
      <li>
          Your consent – if you have signed up to our marketing e-mails, we willprocess this information on the basis of
          your consent (Article 6(1)(a) ofGDPR). Once you revoke your consent, we will immediately remove you fromour
          mailing list;
      </li>
  
      <li>
          Our contractual obligations – in order to register as a publisher on Akamuroplatform, you have to agree to our
          Terms and Conditions, which form a legallybinding contract to which you become a party to (Article 6(1)(b) of
          GDPR);
      </li>
  
      <li>
          Our legal obligation – we will process your data in order to comply with legalobligations imposed on us by
          applicable law, such as financial and taxreporting obligations or when we have to respond to legal process
          (Article6(1)(c) of GDPR);
      </li>
  
      <li>
          Our legitimate interests – we process your personal data for our legitimateinterests, for example, to provide
          our services, defend our legal interests,promote our services with direct marketing as well as analysis and
          research toimprove our services and publisher’s experience (Article 6(1)(f) of GDPR).
      </li>
  
  </ul>
  
  <p>
      Sharing of personal data with third parties
  </p>
  
  <p>
      We may share your personal data with third-party service providers, who provide uswith such services as hosting and
      server services, communication, e-mail or othercontent delivery services, payment processing services, IT and
      financial or legaladvisors (“Service Providers”).
  </p>
  
  <p>
      Akamuro platform may contain content and links to other websites that are operatedby third parties. Akamuro does not
      control these third-party websites (includingwhether or not they store cookies) and this Privacy Policy does not
      apply to them.Please consult the relevant third-party website to find out how that site collects anduses your
      information and to establish whether and for what purpose they usecookies.
  </p>
  
  <p>
      Akamuro encourages publishers to process the personal data of their users(publisher’s website users, whose personal
      data may be processed) in accordancewith the applicable personal data protection laws, especially GDPR.
      Publishersshould provide on their website a GDPR compliant privacy policy and cookie policy,which, among other
      issues, would provide information regarding the cookies that areplaced by the publisher and Akamuro onto user’s
      computers when a user viewspublisher’s webpage and clicks on a publisher affiliate link as well as indicate howthe
      user may opt-out of such use of his or her personal data.
  </p>
  
  <h2>YOUR RIGHTS</h2>
  
  <p>
      You have certain rights regarding the processing of your personal data and inaccordance with the GDPR. You can
      request information on your personal data thatwe process, request to correct or amend it, you have the right to data
      portability and
      right to data deletion. Please note that we will retain some of your data to exercise ordefend our legal rights or
      enforce our Terms and Conditions.
  </p>
  
  <p>
      If we process your data in order to send you our newsletter, you can at any timeunsubscribe to these e-mails by
      using
      the unsubscribe link or adjusting the settingsin your Akamuro profile.
  </p>
  
  <p>
      Furthermore, if you believe that we have unlawfully processed your personal data,you have the right to submit a
      complaint to our contact information provided below, orto your respective data protection supervisory authority.
  </p>
  
  <p>
      The provision of your personal data is a requirement necessary to enter into acontract with Akamuro.
  </p>
  
  <h2>
      DATA RETENTION AND PROTECTION
  </h2>
  
  <p>
      We will retain your personal data as long as it is required for the purposes stated inthis Privacy Policy, namely,
      for the fulfillment of our contractual obligations andprotection of our legitimate interests and defense against
      legal claims according withthe applicable law.
  </p>
  
  <p>
      You can at any time delete your profile by contacting your personal Akamuromanager and we will delete your personal
      data. We may only keep a certainminimum amount of your personal data if it will be required by applicable law
      (forexample, data on commission payments and your transaction history).
  </p>
  
  <p>
      We highly value our data security and use appropriate technical measures to ensuredata security and protection. All
      our customer personal data is stored in protectedservers and only accessed by authorized personnel, who are bound by
      confidentialityrequirements.
  </p>
  
  <h2>
      CHANGES TO THIS PRIVACY POLICY
  </h2>
  
  <p>
      We reserve the right to change or amend this Privacy Policy from time to time.Updated Privacy Policy will enter into
      force and will apply from the moment it hasbeen uploaded to our webpage.
  </p>
  
  <h2>
      CONTACT INFORMATION
  </h2>
  
  <p>
      If you have any questions in relation to your personal data or this Privacy Policy, youcan contact us at <a href="mailto:partners@akamuro.com">partners@akamuro.com</a> or using our skype contact –live:.cid.dc1db02d7400ae62 or telegram @akamuro or contact your
      personalmanager.
  </p>
      `
    }
  },
  {
    path: '/offer',
    Name: 'Offers',
    component: Offer
  }
]

const router = new VueRouter({
  routes
})

export default router