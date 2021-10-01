const express = require('express') //express là thư viện đã cài
const handlebars = require('express-handlebars')
const methodOverride = require('method-override')
const path = require('path')
const morgan = require('morgan')
const app = express()
const port = 3000
const route = require('./routes')
const db = require('./config/db')
const sortMiddleWare = require('./app/middleware/SortMiddleware')



app.use(methodOverride('_method'))

//to create new
app.use(express.urlencoded({ // là middleware giúp nhận diện submit từ form lên, cấu trúc lại dữ liệu, lưu vào 
  extended: true // object body
}))


//connect to DB
db.connect()

//custom middleware
app.use(sortMiddleWare)


// config img - static file
app.use(express.static(path.join(__dirname, 'public'))) //kiểm tra xem cái path này có phải là file tĩnh hay ko, nếu là file tĩnh thì sẽ điều hướng sang floder public

// http logger
app.use(morgan('combined'))

//template engine
app.engine('handlebars', handlebars({
  helpers: {
    sum: (a, b) => a + b,
    sortable: (field, sort) => {

      const sortType = field === sort.column ? sort.type : 'default'

      const icons = {
        default: 'oi oi-elevator',
        asc: 'oi oi-sort-ascending',
        desc: 'oi oi-sort-descending',
      }
      const types = {
        default: 'desc',
        asc: 'desc',
        desc: 'asc',
      }

      const icon = icons[sortType]
      const type = types[sortType]

      return `<a href="?_sort&column=${field}&type=${type}"><span class="${icon}"></span></a>`
    }
  }
}))
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resorces', 'views'))

//route init
route(app)



// middleware
app.use(express.urlencoded({
  extended: true
}))

app.use(express.json())


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})