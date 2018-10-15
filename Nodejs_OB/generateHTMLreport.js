const report = require('cucumber-html-report');

report.create({
    source: './reports/cucumber_report.json',
    dest: './reports/cucumber_report_html',
    name: 'testreport.html',
    title: 'Open Banking Report',
    component: 'Payment Initiation API Specification',
    dateformat: 'YYYY-MM-DD hh:mm:ss',
})
    .then(console.log)
    .catch(console.error);