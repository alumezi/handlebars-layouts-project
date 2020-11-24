const fs = require('fs')
const handlebars = require('handlebars')
const layouts = require('handlebars-layouts')

handlebars.registerHelper(layouts(handlebars))

//layouts
handlebars.registerPartial('layout', fs.readFileSync('layouts/layout.hbs', 'utf8'))
handlebars.registerPartial('modal-layout', fs.readFileSync('layouts/modal-layout.hbs', 'utf8'))

//partials
handlebars.registerPartial('main-modal', fs.readFileSync('partials/main-modal.hbs', 'utf8'))

var template = handlebars.compile(fs.readFileSync('pages/page.hbs', 'utf8'))

var output = template({
    title: 'Layout test',
    items: [
        'apple',
        'orange',
        'banana'
    ]
})

fs.writeFile('dist/index.html', output, 'utf8', err => {
    if (err) throw err;
    console.log('The file has been saved!');
})