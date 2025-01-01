const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session'); 
const path = require('path'); 
const nguoiDungController = require('./Controller/nguoidungcontroller'); 
const suaprofileController = require('./Controller/suaprofilecontroller');
const bepcanhancontroller = require('./Controller/bepcanhancontroller'); 
const baivietcontroller = require('./Controller/baivietcontroller')
const baocaobaiviet = require('./Controller/baocaobaivietontroller')
const themmoncontroller = require('./Controller/themmoncontroller')
const xoabaivietcontroller = require('./Controller/xoabaivietcontroller')
const suabaivietcontroller = require('./Controller/suabaivietcontroller')
const yeuthichcontroller = require('./Controller/yeuthichcontroller')
const timkiemcontroller = require('./Controller/timkiemcontroller')
const theodoicontroller = require('./Controller/theodoicontroller')
const binhluancontroller = require('./Controller/binhluancontroller')
const lienhecontroller = require('./Controller/lienhecontroller')
const admincontroller = require('./Controller/admin/admincontroller')
const adminlogincontroller = require('./Controller/admin/adminlogincontroller')
const xoanguoidungcontroller = require('./Controller/admin/xoanguoidungcontroller')
const thongtinusercontroller = require('./Controller/admin/thongtinusercontroller')
const app = express();
app.use(express.json());
app.use(cors({
  origin: true, 
  credentials: true 
}));
app.use(bodyParser.json());

app.use('/uploads', express.static('uploads'));

// Cấu hình session
app.use(session({
  secret: 'my-secret-key',
  resave: false, 
  saveUninitialized: false, 
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, 
    httpOnly: true, 
  }
}));

// Routes từ Controller
app.use('/', nguoiDungController);
app.use('/', suaprofileController); 
app.use('/', bepcanhancontroller);
app.use('/', baivietcontroller); 
app.use('/', baocaobaiviet); 
app.use('/', themmoncontroller);
app.use('/', xoabaivietcontroller); 
app.use('/', suabaivietcontroller); 
app.use('/', yeuthichcontroller); 
app.use('/', timkiemcontroller); 
app.use('/', theodoicontroller); 
app.use('/', binhluancontroller); 
app.use('/', lienhecontroller); 
app.use('/', admincontroller); 
app.use('/', adminlogincontroller); 
app.use('/', xoanguoidungcontroller);
app.use('/', thongtinusercontroller); 
const PORT = 3001;
app.listen(PORT, () => console.log(`Server chạy tại http://localhost:${PORT}`));
