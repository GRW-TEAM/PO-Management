TCCC GRW PO MANAGEMENT HUB
==========================

OPEN THE WEBSITE
1. Extract the ZIP file.
2. Keep the grw_po_management_website folder structure unchanged.
3. Open index.html in Microsoft Edge or Google Chrome.

LATEST DESIGN UPDATE
- PO Amendments uses the approved premium horizontal flow with seven connected amendment steps.
- Selecting a step updates the guidance panel and retains the separate New PO Required panel.
- The flow is horizontally scrollable on tablet and mobile to prevent text clipping and page overflow.
- Preserved the existing homepage, PO Creation, PO Amendments, FAQs, template downloads, user guide, and macro-security help.
- PO Creation uses a logistics / distribution-centre hero image.
- PO Amendments uses its own Coca-Cola campus, products and truck hero image.
- PO Closure uses a separate panoramic campus / delivery scene. All three hero banners keep the same sizing and styling system.
- The Home card and sidebar label now read “PO Amendments” (Right Sizing details remain in the Amendments guide).
- PO Closure highlights three closure blockers: PO over-consumption, blocked invoices, and posted invoices awaiting payment.
- The block status reference is expandable, includes the supplied block reasons, and points out duplicate status codes from the provided list.
- amendments-flow.css contains the responsive horizontal-flow layout.

PO AMENDMENTS
Seven interactive amendment types are provided: PO Value, PO Description, Payment Terms, Cost Center/WBS, Material Group (GL Code), Delivery Date, and Reopen a PO. The separate New PO Required panel covers currency, vendor, and plant code/delivery address changes.

CONNECTED RESOURCES
- Vendor Master Data Lookup (Power BI): connected to the supplied Power BI report URL.
- Suppliers (Purchase Pal +): connected to the supplied supplier-list URL.
- Plant Information workbook: assets/Plant-Information.xlsx (download link is active in PO Creation).
- Payment Terms Exceptions: assets/Payment-Terms-Exceptions.pdf (download link is active under PO Amendments > Payment Terms).

DOCUMENT HANDLING
The Payment Terms Exceptions PDF is marked “Classified - Confidential”. Keep this portal and document within approved internal channels and confirm sharing permissions before publishing or distributing it.

IMPORTANT
This site is a static process-guidance portal. It does not submit, amend, close, or approve a real Purchase Order. Follow the latest approved GRW SOP for final decisions.

PERFORMANCE / ACCESSIBILITY
The design uses local assets and CSS-based animations. Reduced-motion preferences are respected. Use a modern Edge or Chrome browser for the intended display.

ADVANCED VISUAL POLISH / LINK BEHAVIOR
- Added advanced-polish.css for consistent panel elevation, focus indicators, smooth hover feedback, and refined spacing; visible process copy was not changed.
- External web links and email links open in a new tab/context.
- The PO Creation Template User Guide and Payment Terms Exceptions PDFs open in a new tab.
- The .xlsm template and Plant Information .xlsx workbook remain downloads; downloading them does not navigate away from the website.
- Resource links use rel="noopener noreferrer" when opening a new tab.

PO CLOSURE
- Example: PO value USD 10,000 vs invoiced amount USD 12,000 means over-consumption of USD 2,000; the PO cannot be closed until resolved.
- A PO cannot be closed while any invoice is blocked or any posted invoice remains unpaid. Contact the relevant team to resolve the issue.
- Block A is noted as default for non-PO invoices during payment processing. The supplied block labels include repeated codes (A, W and R); the page retains these labels and advises users to check the actual invoice block reason.


FAQ PAGE UPDATE
- Rebuilt FAQs & Common Mistakes with topic filters, search, short answer panels, resource links, and GRW team contact.
- Includes PO Creation, PO Amendments, PO Closure, and Template & Macro Help questions.
- Excludes the dedicated FAQs about handling blocked invoices and looking up blocked invoice status codes; those details remain on the PO Closure page as requested.
- The Common Mistakes section excludes the item about requesting closure before resolving blockers.
