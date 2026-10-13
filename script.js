const fieldData = [
  {
    id:'region', name:'Region', short:'Select the applicable region.', icon:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>',
    intro:'Region identifies the geographical or business region that the PO request belongs to, according to the GRW process.',
    why:'The correct region helps route the request to the appropriate team and ensures that the applicable regional process is followed.',
    provide:'Select the region relevant to the request from the approved options in your process or request system.',
    mistakes:['Selecting the wrong region.','Choosing a region that does not match the business requirement.'],
    helper:'Select the applicable region for your PO request.'
  },
  {
    id:'requestor', name:'Requestor Name (KO FTE)', short:'Identify the responsible requestor.', icon:'<svg viewBox="0 0 24 24"><circle cx="12" cy="7.5" r="3.5"/><path d="M4.5 21v-2a7.5 7.5 0 0 1 15 0v2z"/></svg>',
    intro:'This is the name of the person responsible for raising or requesting the PO, using the requestor identification required by GRW.',
    why:'The requestor is the point of contact if the PO team needs clarification, additional details or corrections.',
    provide:'Enter the correct requestor name and any KO FTE identification required by your official submission process.',
    mistakes:['Entering another employee’s name.','Providing an incomplete or incorrect name.','Leaving out an employee identifier if your process requires one.'],
    helper:'Enter the responsible requestor name and required identification as per the GRW process.'
  },
  {
    id:'title', name:'Purchase Order Title', short:'Describe what the PO is for.', icon:'<svg viewBox="0 0 24 24"><path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 12h7M9 16h7"/></svg>',
    intro:'The PO Title is a short description of what the purchase order is being created for.',
    why:'A clear title lets the requestor, procurement team and approvers quickly understand the purpose of the PO.',
    provide:'Write a short, specific description of the goods or services. Where useful, include the relevant site or period.',
    mistakes:['Using a vague title such as “General PO”.','Entering a title that does not match the purchase scope.','Using inconsistent or inaccurate descriptions.'],
    helper:'Provide a clear title that describes the purpose of your purchase order.',
    example:'Monthly Facilities Maintenance – Chennai Site'
  },
  {
    id:'costcenter', name:'Cost Center (OPEX) or WBS Number (CAPEX)', short:'Provide applicable financial coding.', icon:'<svg viewBox="0 0 24 24"><rect x="3" y="4" width="7" height="7" rx="1"/><rect x="14" y="4" width="7" height="7" rx="1"/><rect x="8.5" y="15" width="7" height="6" rx="1"/><path d="M6.5 11v2h11v-2M12 13v2"/></svg>',
    intro:'This field identifies the financial cost object to which the purchase expenditure should be assigned.',
    why:'It supports financial tracking, reporting and the applicable budget and coding checks.',
    provide:'For applicable OPEX, provide the valid Cost Center. For applicable CAPEX, provide the approved WBS number. Follow the approved classification for your request.',
    mistakes:['Providing a Cost Center when a WBS is required, or vice versa.','Entering an invalid or inactive code.','Using a code unrelated to the PO purpose.','Leaving the applicable coding field blank.'],
    helper:'Provide the correct Cost Center for OPEX or WBS Number for CAPEX, as applicable.'
  },
  {
    id:'vendor', name:'Vendor Name & Number', short:'Enter both vendor details.', icon:'<svg viewBox="0 0 24 24"><path d="M3 21V7l9-4 9 4v14zM8 21v-6h8v6M7 9h.01M12 9h.01M17 9h.01"/></svg>',
    intro:'The vendor is the supplier providing the goods or services. The vendor number is the identifier used in the company’s supplier or procurement system.',
    why:'Correct vendor information helps associate the PO with the intended supplier and validate the supplier record.',
    provide:'Enter both the vendor’s registered name and the corresponding vendor number from the approved vendor record or internal system.',
    mistakes:['Entering only the vendor name or only the number.','Selecting a different vendor with a similar name.','Providing a number that does not match the vendor name.','Entering supplier details that conflict with supporting documents.'],
    helper:'Enter the vendor name and its corresponding vendor number. Ensure both refer to the same supplier.'
  },
  {
    id:'email', name:'Vendor Contact Email Address', short:'Provide a valid contact email.', icon:'<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>',
    intro:'This is the email address of the relevant vendor contact for the purchase or service.',
    why:'It helps identify the appropriate supplier contact when clarification or coordination is needed under the applicable process.',
    provide:'Enter the correct, current email address for the relevant vendor contact.',
    mistakes:['Typing an invalid email address.','Using an outdated contact.','Providing an email address for another supplier.'],
    helper:'Provide a valid email address for the relevant vendor contact.',
    example:'vendor.contact@company.com'
  },
  {
    id:'currency', name:'Currency', short:'Select the applicable currency.', icon:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M16 8.5c-.7-1-2-1.5-3.7-1.5-2.2 0-3.5 1-3.5 2.4 0 3.8 7.2 1.3 7.2 5 0 1.5-1.5 2.6-3.8 2.6-1.7 0-3.2-.6-4.1-1.7M12.3 5v14"/></svg>',
    intro:'Currency specifies the monetary unit in which the PO value is requested.',
    why:'It ensures the amount is understood and recorded using the correct monetary unit for the transaction.',
    provide:'Select the currency that applies to the transaction and matches the contract, quotation or other approved commercial arrangement.',
    mistakes:['Selecting a currency different from the supporting documents.','Choosing the wrong currency.','Providing an amount without the applicable currency.'],
    helper:'Select the currency that matches the applicable commercial agreement or supporting documentation.',
    example:'Illustrative examples: INR, USD or EUR, depending on the approved transaction.'
  },
  {
    id:'value', name:'PO Value', short:'Enter the requested amount.', icon:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M16 8.5c-.7-1-2-1.5-3.7-1.5-2.2 0-3.5 1-3.5 2.4 0 3.8 7.2 1.3 7.2 5 0 1.5-1.5 2.6-3.8 2.6-1.7 0-3.2-.6-4.1-1.7M12.3 5v14"/></svg>',
    intro:'The PO Value is the monetary amount requested for the purchase order.',
    why:'It is used for applicable financial checks, budget validation and approval requirements.',
    provide:'Enter the requested amount in the selected currency. Ensure it is supported by the relevant quotation, contract, SOW or other required documentation.',
    mistakes:['Entering an amount that does not align with supporting documents.','Entering the wrong amount or currency.','Leaving the amount blank.','Using a tax-inclusive or tax-exclusive basis that conflicts with the applicable PO instructions.'],
    helper:'Enter the correct PO value and ensure it aligns with the supporting documents and value-entry requirements.',
    example:'Example only: INR 250,000. Confirm whether the applicable process expects a tax-inclusive or tax-exclusive value.'
  },
  {
    id:'delivery', name:'Delivery Address or Plant Code', short:'Provide the required destination.', icon:'<svg viewBox="0 0 24 24"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    intro:'This identifies where goods must be delivered or the site or plant associated with the delivery, as applicable.',
    why:'The right destination helps the supplier and relevant teams understand where the goods or services are required.',
    provide:'Provide the applicable delivery address or valid plant code, following your company’s process and the actual delivery requirement.',
    mistakes:['Providing the wrong delivery location.','Entering an invalid plant code.','Leaving the relevant destination field blank.','Providing a location that does not match the intended delivery.'],
    helper:'Provide the correct delivery address or applicable plant code, as required for your PO.'
  },
  {
    id:'frequency', name:'Delivery Frequency', short:'Choose the correct frequency.', icon:'<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18M8 14h2M14 14h2M8 17h2"/></svg>',
    intro:'Delivery frequency indicates how often the goods or services are expected to be delivered or provided under the PO.',
    why:'It communicates whether the PO is intended for a one-time requirement or a recurring monthly delivery or service.',
    provide:'Choose Once for a one-time requirement or Monthly for a recurring monthly requirement, according to the approved scope.',
    mistakes:['Selecting Once for a recurring monthly requirement.','Selecting Monthly for a one-time requirement.','Choosing a frequency that conflicts with the supporting documents.'],
    helper:'Select Once for a one-time requirement or Monthly for a recurring monthly requirement.',
    example:'Once: one-time equipment delivery. Monthly: recurring maintenance service.'
  },
  {
    id:'date', name:'Delivery Date', short:'Enter the expected delivery date.', icon:'<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18M8 14h3M8 17h3M15 14h1"/></svg>',
    intro:'The delivery date is the expected date when the goods or services are to be delivered or commence, according to the PO requirement.',
    why:'It helps the relevant teams understand the expected timing and check the request against the supplier’s agreed schedule.',
    provide:'Enter the expected date if available. If it is not provided, GRW will apply the applicable default date: today or 31 December of the current year. For monthly requirements, follow the approved instructions for the first delivery date and recurring schedule.',
    mistakes:['Entering an incorrect date.','Selecting a date that conflicts with the agreed schedule.','Assuming the default date without following the applicable GRW rule.'],
    helper:'Delivery Date is optional. If left blank, follow the applicable GRW default-date rule.'
  }
];

// Optional fields for this guide: Region, Requestor Name (KO FTE), Vendor Contact Email and Delivery Date.
['region','requestor','email','date'].forEach(id => { const item = fieldData.find(f => f.id === id); if (item) item.optional = true; });

// Approved GRW reference links and supplied plant workbook.
const RESOURCE_LINKS = {
  vendorReference1: 'https://app.powerbi.com/groups/me/reports/111cf862-4f9d-4592-aca3-eb551436da29/ReportSection?experience=power-bi',
  vendorReference2: 'https://app.orolabs.ai/supplier/supplier-list#tid_coca_cola--cocacolaprod',
  plantCodeWorkbook: 'assets/Plant-Information.xlsx',
  poCreationTemplate: 'assets/PO-Creation-Form.xlsm',
  userGuidePdf: 'assets/PO-Creation-Template-User-Guide.pdf'
};
const simpleFieldText = {
  region: 'APAC · EMEA · NA · LATAM',
  requestor: 'Optional. Approval routing is based on the KO FTE details provided.',
  title: 'Use a clear title that describes the purchase or service.',
  costcenter: 'OPEX: Cost Center · CAPEX: WBS Number.',
  vendor: 'Provide the vendor name and matching vendor number.',
  email: 'Optional. Add the vendor contact email if available.',
  currency: 'Examples: EUR · INR · USD',
  value: 'Enter the requested amount in the selected currency.',
  delivery: 'Provide the delivery address or applicable plant code.',
  frequency: 'Choose Once or Monthly.',
  date: 'Enter the expected delivery date if known.'
};

const pageSearchItems = [
  {title:'PO Creation Overview',desc:'Purpose, process flow and the 7 required plus 4 optional fields.',page:'overview',keywords:'home overview prepare request create new purchase order mandatory region requestor value delivery date'},
  {title:'PO Creation Details',desc:'Step-by-step guidance for all required PO information.',page:'po-creation',keywords:'create po request details cost center wbs vendor currency delivery frequency template download user guide'},
  {title:'PO Amendments',desc:'Change PO value, description, payment terms, coding, delivery dates or reopen a PO.',page:'amendments',keywords:'amend amendment increase reduce decrease right sizing existing value line item description title payment terms cost center wbs material group GL code delivery date reopen currency vendor plant delivery address'},
  {title:'PO Closure',desc:'Check over-consumption, blocked invoice status and posted invoices awaiting payment.',page:'closure',keywords:'close closure PO value over-consumed overconsumption invoice blocked block status A W R J S D M Q B T skip account posted unpaid not paid payment pending close blocked invoice status code'},
  {title:'FAQs & Common Mistakes',desc:'Answers to common questions and rework reasons.',page:'faqs',keywords:'faq help common mistakes rejection returned rejected wrong missing'},
  {title:'Process Support',desc:'Find the next step for process-specific clarification.',page:'support',keywords:'support contact help sop process owner contact email'}
];

const amendData = {
  value: {
    kicker:'VALUE CHANGE', title:'Increase or reduce PO value', badge:'Line-item details required', tone:'green',
    intro:'Tell us exactly which PO line item needs to increase or decrease and provide the current and requested values.',
    body:`<div class="amx-detail-note"><span class="amx-note-icon">i</span><p>If the PO has more than one line item, clearly identify <strong>which line item</strong> needs to change.</p></div>
      <div class="amx-example-label">EXAMPLE</div>
      <div class="amx-value-example"><div><small>Line item</small><strong>30</strong></div><span class="amx-value-arrow">→</span><div><small>Current value</small><strong>2,000</strong></div><span class="amx-value-arrow">→</span><div class="amx-value-new"><small>Requested value</small><strong>4,500</strong></div></div>
      <p class="amx-detail-footnote">Example only. Use the values and currency shown on your actual PO.</p>
      <div class="amx-what-to-send"><strong>Include in your request</strong><span>Existing PO number · Line item number · Current value · Requested new value</span></div>`
  },
  description: {
    kicker:'PO DESCRIPTION', title:'Update the PO description', badge:'Current → New description', tone:'blue',
    intro:'Share the current PO description and the exact wording you want to use instead.',
    body:`<div class="amx-description-change"><div><small>CURRENT DESCRIPTION</small><strong>TCCC New PO</strong></div><span aria-hidden="true">→</span><div class="amx-description-new"><small>NEW DESCRIPTION</small><strong>2026 TCCC New PO Request</strong></div></div>
      <div class="amx-what-to-send"><strong>Include in your request</strong><span>Existing PO number · Current description · New description</span></div>`
  },
  payment: {
    kicker:'PO-LEVEL UPDATE', title:'Update payment terms', badge:'Reference category required', tone:'orange',
    intro:'Payment terms can be reviewed against the approved Payment Terms Reference.',
    body:`<ol class="amx-simple-steps"><li>Open the Payment Terms Exceptions reference below.</li><li>Check whether the requested payment terms match a listed exception category.</li><li>If the requested terms do not fit a listed category, The GRW team will not process the change from our end. Other locally negotiated exceptions must follow the approval route in SPP 5.1.</li></ol>
      <a class="amx-resource-placeholder amx-payment-pdf-link" href="assets/Payment-Terms-Exceptions.pdf" target="_blank" rel="noopener noreferrer"><span class="amx-resource-icon">PDF</span><span class="amx-payment-resource-copy"><strong>Payment Terms Exceptions</strong><small>Reference for authorised exception categories and related conditions.</small><small class="amx-payment-confidential">Internal reference · Classified - Confidential · Revised April 2024</small></span><span class="amx-download-pill">Download PDF ↓</span></a>
      <div class="amx-payment-note"><strong>Important</strong><span>The document states that standard 60-day and 120-day terms are based on invoice date and invoice receipt. Advance payments without an invoice follow the policy approval process.</span></div>`
  },
  coding: {
    kicker:'FINANCIAL CODING', title:'Change Cost Center or WBS', badge:'Invoice status matters', tone:'indigo',
    intro:'A Cost Center or WBS change may be possible after the PO is created, depending on the invoice status.',
    body:`<div class="amx-status-list"><div><span class="amx-status-dot status-blue"></span><p><strong>PO eligible for amendment</strong><small>The GRW team can review the request and update the Cost Center or WBS based on the current PO status.</small></p></div><div><span class="amx-status-dot status-red"></span><p><strong>Invoice processed and paid</strong><small>We cannot change the Cost Center or WBS from our end.</small></p></div></div>
      <div class="amx-recommendation"><span aria-hidden="true">✦</span><p><strong>Recommended approach</strong><br>Close the existing PO and create a new PO with the correct Cost Center or WBS, where required.</p></div>`
  },
  gl: {
    kicker:'MATERIAL GROUP / GL CODE', title:'Change the GL code', badge:'Invoice status determines next step', tone:'purple',
    intro:'The available option depends on whether an invoice has been posted or paid.',
    body:`<div class="amx-status-list"><div><span class="amx-status-dot status-green"></span><p><strong>Before invoice posting</strong><small>The GRW team can update the GL code.</small></p></div><div><span class="amx-status-dot status-amber"></span><p><strong>Invoice posted, but not paid</strong><small>The GRW team can reverse the invoice, then update the GL code.</small></p></div><div><span class="amx-status-dot status-red"></span><p><strong>Invoice posted and paid</strong><small>We cannot change the GL code from our end.</small></p></div></div>
      <div class="amx-recommendation"><span aria-hidden="true">✦</span><p><strong>Alternative for remaining PO funds</strong><br>Where applicable, The GRW team can create a new line item using the requested GL code for the remaining available amount.</p></div>
      <div class="amx-example-label">EXAMPLE — REMAINING FUNDS</div>
      <div class="amx-funds-example"><div><small>Original PO value</small><strong>USD 50,000</strong></div><div><small>Already invoiced</small><strong>USD 22,000</strong></div><div><small>Remaining balance</small><strong>USD 28,000</strong></div></div>
      <p class="amx-detail-footnote">The example shows the balance calculation only. Any new line item remains subject to the applicable process.</p>`
  },
  date: {
    kicker:'DELIVERY SCHEDULE', title:'Change the delivery date', badge:'Provide the revised date', tone:'teal',
    intro:'Tell us the current date and the new delivery date required on the existing PO.',
    body:`<div class="amx-date-change"><div><small>CURRENT DATE</small><strong>01/31/2026</strong></div><span aria-hidden="true">→</span><div class="amx-date-new"><small>REQUESTED DATE</small><strong>06/30/2026</strong></div></div>
      <div class="amx-what-to-send"><strong>Include in your request</strong><span>Existing PO number · Current delivery date · New delivery date</span></div>
      <p class="amx-detail-footnote">Date example uses MM/DD/YYYY format.</p>`
  },
  reopen: {
    kicker:'REOPEN REQUEST', title:'Reopen an existing PO', badge:'Prior-year approval may be needed', tone:'red',
    intro:'The approval required depends on whether the PO belongs to the current year or a prior year.',
    body:`<div class="amx-reopen-grid"><div class="amx-reopen-option"><span class="amx-reopen-icon reopen-current">✓</span><div><strong>Current-year PO</strong><p>The GRW team can proceed with the reopen request.</p></div><span class="amx-status-pill pill-green">Can proceed</span></div><div class="amx-reopen-option"><span class="amx-reopen-icon reopen-prior">!</span><div><strong>Prior-year PO</strong><p>OREX or CAPEX Controller approval is required before GRW can proceed.</p></div><span class="amx-status-pill pill-amber">Approval needed</span></div></div>
      <div class="amx-what-to-send"><strong>Include in your request</strong><span>Existing PO number · PO year · Confirmation or approval, if required</span></div>`
  }
};

const faqData = [
  {category:'PO Creation',q:'What information is required for a new PO?',a:'There are 7 required fields and 4 optional fields.',bullets:['Required: Purchase Order Title; Cost Center (OPEX) or WBS Number (CAPEX); Vendor Name & Number; Currency; PO Value; Delivery Address or Plant Code; Delivery Frequency.','Optional: Region; Requestor Name (KO FTE); Vendor Contact Email Address; Delivery Date.'],note:'Providing complete information helps the review, but applicable checks and approvals must still be satisfied.'},
  {category:'PO Creation',q:'Which KO FTE should I use for my region?',a:'The current regional KO FTE reference is:',bullets:['APAC — Dexter Dy','EMEA — Don Noland','LATAM — Enrique Garcia','NA — Andrew Holbrook','AOC — Kristine Haddwick','Hangar — Emmy Cohen'],note:'If you need to use a different KO FTE, include that employee’s details in the request. Approval routing is based on the KO FTE details provided.'},
  {category:'PO Creation',q:'How do I find the correct Vendor Name and Number?',a:'Use the vendor reference tools below to identify the correct supplier record. Make sure the vendor name and number refer to the same supplier.',links:[{label:'Vendor Master Data Lookup – Power BI',href:'https://app.powerbi.com/groups/me/reports/111cf862-4f9d-4592-aca3-eb551436da29/ReportSection?experience=power-bi',external:true},{label:'Suppliers – Purchase Pal +',href:'https://app.orolabs.ai/supplier/supplier-list#tid_coca_cola--cocacolaprod',external:true}]},
  {category:'PO Creation',q:'How do I find the correct Plant Code?',a:'Download the Plant Information workbook and use it to identify the plant code or delivery location that applies to your request.',links:[{label:'Download Plant Information Excel',href:'assets/Plant-Information.xlsx',download:true}]},
  {category:'PO Creation',q:'Should I provide a Cost Center or a WBS Number?',a:'Use the applicable financial coding for the PO:',bullets:['OPEX — Cost Center','CAPEX — WBS Number'],note:'If you are unsure which code applies, check with your Finance Team.'},
  {category:'PO Creation',q:'What happens if required information is missing?',a:'The request may be returned for correction or may not proceed until the missing information is provided. Check all 7 required fields and the supporting details before sending the request.'},
  {category:'PO Creation',q:'Is Delivery Date mandatory?',a:'No. Delivery Date is optional. If it is not provided, the GRW team will apply the relevant default date: the current date or 31 December of the current year, according to the applicable request process.',note:'If you are unsure which default applies to your request, contact the GRW team before submitting it.'},
  {category:'PO Creation',q:'Does completing the template guarantee that a PO will be created?',a:'No. The completed template is used to prepare the request. The PO is created only after the applicable validation, policy, budget and approval requirements have been met.'},

  {category:'PO Amendments',q:'What details should I provide to increase or reduce a PO value?',a:'Provide the existing PO number, the line item to be changed (if the PO has multiple lines), its current value and the requested new value.',note:'Example: Line item 30 — current value USD 2,000 → new value USD 4,500. Clearly identify the line item to avoid delays.'},
  {category:'PO Amendments',q:'What is Right Sizing?',a:'Right Sizing means increasing or reducing the value of an existing PO to match the required amount. If the PO has multiple line items, specify exactly which line item needs to change.'},
  {category:'PO Amendments',q:'Can I update the PO Description?',a:'Yes. Share the existing description and the exact new description you want on the PO.',note:'Example: “TCCC New PO” → “2026 TCCC New PO Request”. Include the existing PO number in your request.'},
  {category:'PO Amendments',q:'Can I update payment terms on an existing PO?',a:'Refer to the Payment Terms Exceptions document. If the requested terms match a listed exception category, share the applicable category with the GRW team. If the request does not match a listed category, GRW will not process the change directly; the required approval route under SPP 5.1 must be followed.',links:[{label:'Open Payment Terms Exceptions PDF',href:'assets/Payment-Terms-Exceptions.pdf',external:true}],note:'The supplied PDF is marked Classified - Confidential. Keep it within approved internal channels.'},
  {category:'PO Amendments',q:'Can I change the Cost Center or WBS on an existing PO?',a:'The GRW team can review a Cost Center or WBS change based on the PO and invoice status. If an invoice has already been processed and paid, the change cannot be made from the GRW team’s end.',note:'The recommended route, where required, is to close the existing PO and create a new PO with the correct coding.'},
  {category:'PO Amendments',q:'Can the GL Code be changed after invoice posting?',a:'The available option depends on the invoice status:',bullets:['Before invoice posting — the GRW team can update the GL Code.','Invoice posted but not paid — the invoice can be reversed, then the GL Code can be updated, following the applicable process.','Invoice posted and paid — the GL Code cannot be changed from the GRW team’s end.'],note:'If funds remain on the PO, a new line item with the requested GL Code may be considered for the remaining amount, subject to the applicable process.'},
  {category:'PO Amendments',q:'Can I change the currency, vendor, Plant Code or delivery address on an existing PO?',a:'No. These changes are not processed on an existing PO. Close the existing PO and create a new PO with the correct currency, vendor and/or delivery details.'},
  {category:'PO Amendments',q:'Can I change the delivery date on an existing PO?',a:'Provide the existing PO number, current delivery date and requested new delivery date.',note:'Example: 01/31/2026 → 06/30/2026. Use the date format required by the applicable process.'},
  {category:'PO Amendments',q:'What approval is needed to reopen a prior-year PO?',a:'For a current-year PO, the GRW team can proceed with the reopen request. For a prior-year PO, OREX or CAPEX Controller approval is required before the GRW team can proceed.'},

  {category:'PO Closure',q:'What does the GRW team check before submitting a PO closure request?',a:'The GRW team will check that:',bullets:['The PO is not over-consumed.','No invoices are in blocked status.','No posted invoices are awaiting payment.'],note:'If all checks are clear, the GRW team will submit the PO closure request. If an issue is found, the GRW team will contact you with the next steps.'},
  {category:'PO Closure',q:'What does “PO over-consumed” mean?',a:'It means the invoiced amount is greater than the PO value.',note:'Example: PO value USD 10,000; invoiced amount USD 12,000; over-consumed amount USD 2,000. The issue must be resolved before the PO can be closed.'},
  {category:'PO Closure',q:'Can a PO be closed if an invoice is posted but not paid?',a:'No. If an invoice has been posted but payment is still pending, the PO cannot be closed until the outstanding payment issue is resolved.'},

  {category:'Template & Macro Help',q:'How do I complete and submit the PO Creation Template?',a:'Download the Excel template, fill in the requested details, and review the information before using the template’s Send Email option.',bullets:['Save the completed template when prompted.','Review the email draft and make sure the completed template is attached.','Send the email to the GRW team mailbox to submit your request.'],links:[{label:'Download PO Creation Excel Template',href:'assets/PO-Creation-Form.xlsm',download:true},{label:'Open the PO Creation Template User Guide',href:'assets/PO-Creation-Template-User-Guide.pdf',external:true}]},
  {category:'Template & Macro Help',q:'What should I do if Excel blocks the template macros?',a:'Close Excel first. In File Explorer, right-click the official PO Creation template and select Properties. On the General tab, under Security, tick Unblock if the option is available; click Apply, then OK. Reopen the template.',note:'Only unblock the official template obtained from a trusted GRW source. If Unblock is unavailable or the warning remains, contact IT or the GRW team. Do not enable all macros or lower Excel’s overall security settings.'}
];

const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => Array.from(root.querySelectorAll(s));
let currentPage = 'overview';
let activeFaqFilter = 'All topics';
let activeModalField = null;
let toastTimer = null;

function applyNewTabTargets(root=document){
  const anchors=[];
  if(root && root.matches && root.matches('a[href]')) anchors.push(root);
  if(root && root.querySelectorAll) anchors.push(...root.querySelectorAll('a[href]'));
  anchors.forEach(link=>{
    const href=(link.getAttribute('href')||'').trim();
    const isResource=link.hasAttribute('data-resource-link');
    if(!href || (href.startsWith('#') && !isResource)) return;
    const localAsset=/^(?:\.\/)?assets\//i.test(href);
    const fileAsset=/\.(?:pdf|xlsx?|xlsm|csv|docx?|pptx?|png|jpe?g|webp)(?:[?#].*)?$/i.test(href);
    const external=/^(?:https?:|mailto:)/i.test(href);
    if(isResource || localAsset || fileAsset || external){
      link.target='_blank';
      link.rel='noopener noreferrer';
    }
    // Let PDFs open in the browser's PDF viewer in a new tab. Excel files remain downloads.
    if(/\.pdf(?:[?#].*)?$/i.test(href)) link.removeAttribute('download');
  });
}

function fieldCard(field, index){
  return `<button class="field-card" type="button" data-field="${field.id}" aria-label="View details for ${escapeHtml(field.name)}"><span class="field-num">${index+1}</span><span class="field-icon">${field.icon}</span><span class="field-label">${escapeHtml(field.name)}</span><span class="field-arrow">↗</span></button>`;
}
function renderOverviewFields(){
  const grid = $('#overviewFieldGrid');
  if(!grid) return;
  grid.innerHTML = fieldData.map(fieldCard).join('');
}
const creationGroups = [
  {id:'request', title:'Request Details', subtitle:'Tell us who is requesting the PO and what it is for.', tone:'green', fields:['region','requestor','title']},
  {id:'financial', title:'Financial & Vendor Details', subtitle:'Provide the correct coding, supplier and value.', tone:'orange', fields:['costcenter','vendor','email','currency','value']},
  {id:'delivery', title:'Delivery Details', subtitle:'Specify where and when the goods or services are required.', tone:'purple', fields:['delivery','frequency','date']}
];
function fieldResources(fieldId){
  if(fieldId==='requestor') return `<details class="poc-inline-details"><summary>View current KO FTE names</summary><div class="poc-kofte-list"><span><b>APAC</b> Dexter Dy</span><span><b>EMEA</b> Don Noland</span><span><b>LATAM</b> Enrique Garcia</span><span><b>NA</b> Andrew Holbrook</span><span><b>AOC</b> Kristine Haddwick</span><span><b>Hangar</b> Emmy Cohen</span></div><p>Need a different KO FTE? Include the employee’s details when submitting your request. Approval routing is based on the KO FTE details provided.</p></details>`;
  if(fieldId==='vendor') return `<div class="poc-resource-row"><a class="poc-resource-link" href="#" data-resource-link="vendorReference1" target="_blank" rel="noopener"><span aria-hidden="true">↗</span> Vendor Master Data Lookup – Power BI</a><a class="poc-resource-link" href="#" data-resource-link="vendorReference2" target="_blank" rel="noopener"><span aria-hidden="true">↗</span> Suppliers – Purchase Pal +</a></div>`;
  if(fieldId==='delivery') return `<div class="poc-resource-row"><a class="poc-resource-link poc-resource-download" href="#" data-resource-link="plantCodeWorkbook" download><span aria-hidden="true">↓</span> Plant Code Excel</a></div>`;
  if(fieldId==='costcenter') return `<div class="poc-inline-note"><span aria-hidden="true">i</span> Check with your Finance Team if you are unsure.</div>`;
  if(fieldId==='date') return `<div class="poc-date-note">Optional. If left blank, GRW will apply the relevant default date: today or 31 December of the current year.</div>`;
  return '';
}
function renderDetailFields(){
  const list = $('#detailFieldList');
  if(!list) return;
  list.innerHTML = creationGroups.map((group, groupIndex)=>{
    const items = group.fields.map(id=>fieldData.find(f=>f.id===id)).filter(Boolean);
    return `<section class="poc-group-card poc-group-${group.tone}" id="poc-group-${group.id}" data-field-group="${group.id}">
      <header class="poc-group-header"><span class="poc-group-number">0${groupIndex+1}</span><span class="poc-group-heading-copy"><strong>${escapeHtml(group.title)}</strong><small>${escapeHtml(group.subtitle)}</small></span><span class="poc-group-count">${items.length} fields</span></header>
      <div class="poc-group-fields">${items.map(f=>{
        const index=fieldData.findIndex(item=>item.id===f.id)+1;
        const optional=Boolean(f.optional);
        const description=simpleFieldText[f.id]||f.short;
        return `<article class="poc-field" id="detail-${f.id}" data-field-card data-category="${group.id}" data-search-text="${escapeHtml(`${f.name} ${description} ${f.provide} ${f.helper}`.toLowerCase())}">
          <div class="poc-field-main"><span class="poc-field-index">${String(index).padStart(2,'0')}</span><span class="poc-field-icon">${f.icon}</span><div class="poc-field-copy"><div class="poc-field-title-row"><strong>${escapeHtml(f.name)}</strong><span class="poc-badge ${optional?'optional':'required'}">${optional?'Optional':'Required'}</span></div><p>${escapeHtml(description)}</p>${fieldResources(f.id)}</div></div>
        </article>`;
      }).join('')}</div>
    </section>`;
  }).join('');
  configureResourceLinks();
}
function configureResourceLinks(){
  $$('[data-resource-link]').forEach(link=>{
    const key=link.dataset.resourceLink;
    const url=(RESOURCE_LINKS[key]||'').trim();
    const status=link.closest('.poc-template-resource')?.querySelector('.poc-resource-status');
    if(url){
      link.href=url;
      link.classList.remove('is-pending');
      link.removeAttribute('aria-disabled');
      const titles={
        vendorReference1:'Open Vendor Master Data Lookup in Power BI',
        vendorReference2:'Open Suppliers in Purchase Pal +',
        plantCodeWorkbook:'Download the approved Plant Code reference workbook',
        poCreationTemplate:'Download the official PO Creation Excel template',
        userGuidePdf:'Download the PO Creation Template User Guide PDF'
      };
      link.title=titles[key]||'Open resource';
      // Keep external resources in a separate browsing context. Excel workbooks remain downloads;
      // PDFs are opened in a new tab so the user can read them without leaving the guide.
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      if(['plantCodeWorkbook','poCreationTemplate'].includes(key)) link.setAttribute('download','');
      if(key === 'userGuidePdf') link.removeAttribute('download');
      if(status){
        const readyText={poCreationTemplate:'Excel template ready to download. Keep the .xlsm format when saving.',userGuidePdf:'PDF user guide ready to download.',plantCodeWorkbook:'Plant Code workbook ready to download.'};
        status.textContent=readyText[key]||'Resource ready to open.';status.classList.add('is-ready');
      }
    }else{
      link.href='#';
      link.classList.add('is-pending');
      link.setAttribute('aria-disabled','true');
      link.title='This resource will be available when the approved link or file is added.';
      if(status){
        const pendingText={poCreationTemplate:'The official Excel template has not been added yet.',userGuidePdf:'The PDF user guide has not been added yet.',plantCodeWorkbook:'The official Plant Code workbook has not been added yet.'};
        status.textContent=pendingText[key]||'This resource has not been connected yet.';status.classList.remove('is-ready');
      }
    }
  });
}
function applyCreationFieldFilters(){
  // The approved stepper design displays all fields in three compact groups. Global search remains available in the header.
}
function renderAmendment(tab='value'){
  const d=amendData[tab]||amendData.value;
  const tone=d.tone||'blue';
  $('#amendContent').innerHTML=`<section class="amx-detail-card amx-detail-${tone}">
    <div class="amx-detail-top"><div class="amx-detail-title-wrap"><span class="amx-detail-kicker">${escapeHtml(d.kicker)}</span><h2>${escapeHtml(d.title)}</h2><p>${escapeHtml(d.intro)}</p></div><span class="amx-detail-badge">${escapeHtml(d.badge)}</span></div>
    <div class="amx-detail-body">${d.body}</div>
  </section>`;
  applyNewTabTargets($('#amendContent'));
  $$('.amx-topic').forEach(b=>{const active=b.dataset.amendTab===tab;b.classList.toggle('active',active);b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1;});
}

function renderFaqs(filter=''){
  const q=filter.trim().toLowerCase();
  const categoryOrder=['PO Creation','PO Amendments','PO Closure','Template & Macro Help'];
  const matching=faqData.filter(item=>{
    const text=[item.category,item.q,item.a,...(item.bullets||[]),item.note||'',...(item.links||[]).map(link=>link.label)].join(' ').toLowerCase();
    return (activeFaqFilter==='All topics'||item.category===activeFaqFilter) && text.includes(q);
  });
  const list=$('#faqList');
  const resultCount=$('#faqResultCount');
  if(resultCount) resultCount.textContent=`Showing ${matching.length} ${matching.length===1?'answer':'answers'}`;
  if(!matching.length){list.innerHTML='<div class="faq-empty-v2"><span class="faq-empty-icon">⌕</span><strong>No matching answers</strong><p>Try another keyword or choose a different topic.</p><button type="button" data-faq-reset>Clear search and filters</button></div>';return;}
  let questionNumber=0;
  const groups=categoryOrder.map(category=>({category,items:matching.filter(item=>item.category===category)})).filter(group=>group.items.length);
  list.innerHTML=groups.map(group=>`<section class="faq-group-v2" aria-label="${escapeHtml(group.category)} questions"><div class="faq-group-heading-v2"><span class="faq-group-icon ${faqCategoryClass(group.category)}">${faqCategoryIcon(group.category)}</span><div><h3>${escapeHtml(group.category)}</h3><small>${group.items.length} ${group.items.length===1?'question':'questions'}</small></div><span class="faq-group-line"></span></div><div class="faq-group-items">${group.items.map(item=>{
    questionNumber++;
    const bullets=item.bullets?.length?`<ul class="faq-answer-list">${item.bullets.map(b=>`<li>${escapeHtml(b)}</li>`).join('')}</ul>`:'';
    const note=item.note?`<div class="faq-answer-note"><span aria-hidden="true">i</span><p>${escapeHtml(item.note)}</p></div>`:'';
    const links=item.links?.length?`<div class="faq-answer-links">${item.links.map(link=>`<a class="faq-answer-link" href="${escapeHtml(link.href)}" ${link.download?'download':''} ${link.download?'':'target="_blank"'} rel="noopener noreferrer"><span>${link.download?'↓':'↗'}</span>${escapeHtml(link.label)}</a>`).join('')}</div>`:'';
    return `<article class="faq-item-v2"><button class="faq-toggle-v2" type="button" aria-expanded="false"><span class="faq-number-v2">${String(questionNumber).padStart(2,'0')}</span><span class="faq-question-copy"><small>${escapeHtml(item.category)}</small><strong>${escapeHtml(item.q)}</strong></span><span class="faq-toggle-icon" aria-hidden="true">+</span></button><div class="faq-answer-v2"><div class="faq-answer-inner"><span class="faq-answer-label">ANSWER</span><p>${escapeHtml(item.a)}</p>${bullets}${note}${links}</div></div></article>`;
  }).join('')}</div></section>`).join('');
  applyNewTabTargets(list);
}
function faqCategoryClass(category){return category==='PO Creation'?'faq-icon-blue':category==='PO Amendments'?'faq-icon-green':category==='PO Closure'?'faq-icon-orange':'faq-icon-purple';}
function faqCategoryIcon(category){return category==='PO Creation'?'01':category==='PO Amendments'?'02':category==='PO Closure'?'03':'04';}
function escapeHtml(value){return String(value).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function navigate(page, anchor){
  const valid=['overview','po-creation','amendments','closure','faqs','support'];
  if(!valid.includes(page)) page='overview';
  currentPage=page;
  $$('.page-view').forEach(v=>v.classList.toggle('active',v.dataset.view===page));
  $$('.topnav-link').forEach(b=>b.classList.toggle('active',b.dataset.page===page || (page==='po-creation'&&b.dataset.page==='po-creation')));
  $$('.side-link').forEach(b=>b.classList.toggle('active',b.dataset.page===page));
  $('#sidebar').classList.remove('mobile-open');
  document.body.classList.remove('mobile-nav-open');
  $('#mobileMenuBtn').setAttribute('aria-expanded','false');
  $('#mobileMenuBtn').setAttribute('aria-label','Open navigation');
  $('#searchResults').hidden=true;
  if(anchor){setTimeout(()=>{const target=document.getElementById(anchor);target?.scrollIntoView({behavior:'smooth',block:'start'});},80);}else{$('#mainContent').scrollTo?.(0,0);window.scrollTo({top:0,behavior:'smooth'});}
  const titles={overview:'GRW PO Management Hub', 'po-creation':'PO Creation Requirements',amendments:'PO Amendments & Right Sizing',closure:'PO Closure',faqs:'FAQs & Common Mistakes',support:'Process Support'};
  document.title=`${titles[page]} | GRW PO Management`;
}
function openFieldModal(fieldId){
  const field=fieldData.find(f=>f.id===fieldId);if(!field)return;
  activeModalField=fieldId;
  const index=fieldData.findIndex(f=>f.id===fieldId)+1;
  $('#modalNumber').textContent=String(index).padStart(2,'0');
  if($('#modalKicker')) $('#modalKicker').textContent=field.optional?'OPTIONAL FIELD':'REQUIRED FIELD';
  $('#modalTitle').textContent=field.name;
  $('#modalIntro').textContent=field.intro;
  $('#modalWhy').textContent=field.why;
  $('#modalProvide').textContent=field.provide;
  $('#modalMistakes').innerHTML=field.mistakes.map(m=>`<li>${escapeHtml(m)}</li>`).join('');
  $('#modalHelper').textContent=field.helper+(field.example?` Example: ${field.example}`:'');
  $('#fieldModal').hidden=false;document.body.style.overflow='hidden';$('#modalClose').focus();
}
function closeModal(){ $('#fieldModal').hidden=true;document.body.style.overflow='';activeModalField=null; }
function showToast(message){const t=$('#toast');t.textContent=message;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),2600);}
function runGlobalSearch(value){
  const results=$('#searchResults');const q=value.trim().toLowerCase();
  if(!q){results.hidden=true;results.innerHTML='';return;}
  const found=[];
  fieldData.forEach(f=>{if(`${f.name} ${f.short} ${f.intro} ${f.why} ${f.provide} ${f.mistakes.join(' ')}`.toLowerCase().includes(q)){found.push({type:'field',field:f,title:f.name,desc:f.optional?'PO Creation · Optional information':'PO Creation · Required information'});}});
  pageSearchItems.forEach(p=>{if(`${p.title} ${p.desc} ${p.keywords}`.toLowerCase().includes(q))found.push({type:'page',page:p.page,title:p.title,desc:p.desc});});
  faqData.forEach(f=>{if(`${f.q} ${f.a} ${f.category}`.toLowerCase().includes(q))found.push({type:'faq',title:f.q,desc:`${f.category} · Frequently asked question`});});
  const unique=found.filter((item,index,arr)=>arr.findIndex(x=>x.type===item.type&&x.title===item.title)===index).slice(0,8);
  results.innerHTML=unique.length?unique.map((r,i)=>`<button class="search-result" type="button" data-search-result="${i}"><span class="result-icon">${r.type==='field'?'<svg viewBox="0 0 24 24"><path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5"/></svg>':r.type==='faq'?'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.3 2.3 0 1 1 3.9 1.7c-1.2 1-1.7 1.2-1.7 2.8"/></svg>':'<svg viewBox="0 0 24 24"><path d="M4 4h16v16H4zM8 8h8M8 12h8M8 16h5"/></svg>'}</span><span><strong>${escapeHtml(r.title)}</strong><small>${escapeHtml(r.desc)}</small></span></button>`).join(''):'<div class="search-empty">No results found. Try “vendor”, “value”, “closure” or “WBS”.</div>';
  results._items=unique;results.hidden=false;
}

renderOverviewFields();renderDetailFields();renderAmendment('value');renderFaqs();applyNewTabTargets(document);

document.addEventListener('keydown',event=>{
  const current=event.target.closest('.amx-flow-step');
  if(!current || !['ArrowRight','ArrowLeft','Home','End'].includes(event.key)) return;
  const tabs=$$('.amx-flow-step');
  const index=tabs.indexOf(current);
  const nextIndex=event.key==='Home'?0:event.key==='End'?tabs.length-1:event.key==='ArrowRight'?Math.min(tabs.length-1,index+1):Math.max(0,index-1);
  if(nextIndex!==index){event.preventDefault();tabs[nextIndex].focus();renderAmendment(tabs[nextIndex].dataset.amendTab);}
});

document.addEventListener('click',event=>{
  const resourceLink=event.target.closest('[data-resource-link]');
  if(resourceLink && !(RESOURCE_LINKS[resourceLink.dataset.resourceLink]||'').trim()){event.preventDefault();const key=resourceLink.dataset.resourceLink;const messages={vendorReference1:'Open Vendor Master Data Lookup in Power BI.',vendorReference2:'Open Suppliers in Purchase Pal +.',plantCodeWorkbook:'Download the supplied Plant Information workbook.',poCreationTemplate:'The PO Creation Excel template is available in the download section.',userGuidePdf:'The PO Creation user guide PDF is available in the download section.'};showToast(messages[key]||'This resource is not available yet. Please contact GRW support.');return;}
  const openDetails=event.target.closest('[data-open-details]');
  if(openDetails){event.preventDefault();const target=document.getElementById(openDetails.dataset.openDetails);if(target){target.open=true;target.scrollIntoView({behavior:'smooth',block:'start'});}return;}
  const stepJump=event.target.closest('[data-scroll-to]');
  if(stepJump){event.preventDefault();document.getElementById(stepJump.dataset.scrollTo)?.scrollIntoView({behavior:'smooth',block:'start'});return;}
  const fieldCardButton=event.target.closest('[data-field]');
  if(fieldCardButton){openFieldModal(fieldCardButton.dataset.field);return;}
  const nav=event.target.closest('[data-page]');
  if(nav){const raw=nav.dataset.page;const [page,anchor]=raw.split('#');navigate(page,anchor);return;}
  const detailToggle=event.target.closest('[data-toggle-field]');
  if(detailToggle){const id=detailToggle.dataset.toggleField;const card=$(`#detail-${id}`);const nowOpen=!card.classList.contains('open');card.classList.toggle('open',nowOpen);detailToggle.setAttribute('aria-expanded',String(nowOpen));return;}
  const tab=event.target.closest('[data-amend-tab]');
  if(tab){renderAmendment(tab.dataset.amendTab);return;}
  const faqFilter=event.target.closest('[data-faq-filter]');
  if(faqFilter){activeFaqFilter=faqFilter.dataset.faqFilter;$$('[data-faq-filter]').forEach(btn=>{const active=btn===faqFilter;btn.classList.toggle('active',active);btn.setAttribute('aria-pressed',String(active));});renderFaqs($('#faqSearch')?.value||'');return;}
  const faqReset=event.target.closest('[data-faq-reset]');
  if(faqReset){activeFaqFilter='All topics';if($('#faqSearch'))$('#faqSearch').value='';$$('[data-faq-filter]').forEach(btn=>{const active=btn.dataset.faqFilter==='All topics';btn.classList.toggle('active',active);btn.setAttribute('aria-pressed',String(active));});renderFaqs('');return;}
  const faqToggle=event.target.closest('.faq-toggle-v2, .faq-toggle');
  if(faqToggle){const item=faqToggle.closest('.faq-item-v2, .faq-item');const nowOpen=!item.classList.contains('open');item.classList.toggle('open',nowOpen);faqToggle.setAttribute('aria-expanded',String(nowOpen));const answer=item.querySelector('.faq-answer-v2, .faq-answer');if(answer)answer.setAttribute('aria-hidden',String(!nowOpen));const icon=faqToggle.querySelector('.faq-toggle-icon');if(icon)icon.textContent=nowOpen?'−':'+';return;}
  const searchResult=event.target.closest('[data-search-result]');
  if(searchResult){const item=$('#searchResults')._items?.[Number(searchResult.dataset.searchResult)];if(!item)return;if(item.type==='field'){navigate('po-creation');setTimeout(()=>{const element=$(`#detail-${item.field.id}`);if(element){element.classList.add('open');element.querySelector('[data-toggle-field]')?.setAttribute('aria-expanded','true');element.scrollIntoView({behavior:'smooth',block:'center'});}else{openFieldModal(item.field.id);}},80);}else if(item.type==='page'){navigate(item.page);}else{navigate('faqs');setTimeout(()=>{const q=item.title;const match=$$('.faq-item').find(el=>el.querySelector('.faq-toggle')?.textContent.includes(q));match?.scrollIntoView({behavior:'smooth',block:'center'});match?.classList.add('open');match?.querySelector('.faq-toggle')?.setAttribute('aria-expanded','true');},80);}$('#globalSearch').value='';$('#searchResults').hidden=true;return;}
  if(!event.target.closest('.search-wrap'))$('#searchResults').hidden=true;
  if(event.target.id==='modalClose'||event.target.id==='modalDone'||event.target.id==='fieldModal')closeModal();
  if(event.target.id==='backToTop'||event.target.id==='backToTop2'||event.target.closest('.back-top'))window.scrollTo({top:0,behavior:'smooth'});
});

$('#toggleTemplateGuide')?.addEventListener('click',()=>{const guide=$('#templateGuide');if(!guide)return;const show=guide.hidden;guide.hidden=!show;$('#toggleTemplateGuide').setAttribute('aria-expanded',String(show));$('#toggleTemplateGuide').querySelector('span').textContent=show?'Hide quick steps':'View quick steps';if(show)guide.scrollIntoView({behavior:'smooth',block:'nearest'});});
$('#closeTemplateGuide')?.addEventListener('click',()=>{const guide=$('#templateGuide');if(guide)guide.hidden=true;$('#toggleTemplateGuide')?.setAttribute('aria-expanded','false');$('#toggleTemplateGuide')?.querySelector('span')&&( $('#toggleTemplateGuide').querySelector('span').textContent='View quick steps');});
$('#modalClose').addEventListener('click',closeModal);$('#modalDone').addEventListener('click',closeModal);
$('#fieldModal').addEventListener('click',event=>{if(event.target.id==='fieldModal')closeModal();});

document.addEventListener('keydown',event=>{
  const current=event.target.closest('.amx-flow-step');
  if(!current || !['ArrowRight','ArrowLeft','Home','End'].includes(event.key)) return;
  const tabs=$$('.amx-flow-step');
  const index=tabs.indexOf(current);
  const nextIndex=event.key==='Home'?0:event.key==='End'?tabs.length-1:event.key==='ArrowRight'?Math.min(tabs.length-1,index+1):Math.max(0,index-1);
  if(nextIndex!==index){event.preventDefault();tabs[nextIndex].focus();renderAmendment(tabs[nextIndex].dataset.amendTab);}
});

document.addEventListener('click',event=>{
  const filter=event.target.closest('[data-field-filter]');
  if(filter){
    $$('.creation-filter').forEach(btn=>{const active=btn===filter;btn.classList.toggle('active',active);btn.setAttribute('aria-pressed',String(active));});
    applyCreationFieldFilters();
  }
});
$('#globalSearch').addEventListener('input',event=>runGlobalSearch(event.target.value));
$('#heroSearchForm')?.addEventListener('submit',event=>{
  event.preventDefault();
  const query=$('#heroSearchInput')?.value.trim()||'';
  if(!query){$('#heroSearchInput')?.focus();return;}
  $('#globalSearch').value=query;
  runGlobalSearch(query);
  window.scrollTo({top:0,behavior:'smooth'});
  setTimeout(()=>$('#globalSearch')?.focus({preventScroll:true}),220);
});
if($('#heroSearchInput')) $('#heroSearchInput').value=''; // Start with an empty hero search, avoiding restored/stale text.
$('#heroSearchInput')?.addEventListener('keydown',event=>{if(event.key==='Escape'){$('#heroSearchInput').value='';}});
$('#faqSearch').addEventListener('input',event=>renderFaqs(event.target.value));
$('#mobileMenuBtn').addEventListener('click',()=>{
  const sidebar=$('#sidebar');const open=!sidebar.classList.contains('mobile-open');
  sidebar.classList.toggle('mobile-open',open);document.body.classList.toggle('mobile-nav-open',open);
  $('#mobileMenuBtn').setAttribute('aria-expanded',String(open));
  $('#mobileMenuBtn').setAttribute('aria-label',open?'Close navigation':'Open navigation');
});
document.addEventListener('keydown',event=>{
  const current=event.target.closest('.amx-flow-step');
  if(!current || !['ArrowRight','ArrowLeft','Home','End'].includes(event.key)) return;
  const tabs=$$('.amx-flow-step');
  const index=tabs.indexOf(current);
  const nextIndex=event.key==='Home'?0:event.key==='End'?tabs.length-1:event.key==='ArrowRight'?Math.min(tabs.length-1,index+1):Math.max(0,index-1);
  if(nextIndex!==index){event.preventDefault();tabs[nextIndex].focus();renderAmendment(tabs[nextIndex].dataset.amendTab);}
});

document.addEventListener('click',event=>{
  if(document.body.classList.contains('mobile-nav-open')&&!event.target.closest('.sidebar')&&!event.target.closest('#mobileMenuBtn')){
    $('#sidebar').classList.remove('mobile-open');document.body.classList.remove('mobile-nav-open');
    $('#mobileMenuBtn').setAttribute('aria-expanded','false');$('#mobileMenuBtn').setAttribute('aria-label','Open navigation');
  }
});
$('#backToTop')?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));$('#backToTop2')?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
document.addEventListener('keydown',event=>{
  if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='k'){event.preventDefault();$('#globalSearch').focus();}
  if(event.key==='Escape'){if(!$('#fieldModal').hidden)closeModal();$('#searchResults').hidden=true;$('#sidebar').classList.remove('mobile-open');document.body.classList.remove('mobile-nav-open');$('#mobileMenuBtn').setAttribute('aria-expanded','false');$('#mobileMenuBtn').setAttribute('aria-label','Open navigation');}
});

// Keep the macro-help disclosure action label in sync with its expanded/collapsed state.
const macroHelpDisclosure = document.getElementById('macroSecurityHelp');
if (macroHelpDisclosure) {
  const macroHelpLabel = macroHelpDisclosure.querySelector('.poc-macro-help-action span');
  const updateMacroHelpLabel = () => {
    if (macroHelpLabel) macroHelpLabel.textContent = macroHelpDisclosure.open ? 'Hide instructions' : 'Show instructions';
  };
  updateMacroHelpLabel();
  macroHelpDisclosure.addEventListener('toggle', updateMacroHelpLabel);
}
