// 导入
import React from 'react'
import ReactDOM from 'react-dom'

import '../assets/css/main.css'
import '../assets/css/index.css'
import dogs from  '../assets/images/dogs.jpg'
import 'font-awesome/css/font-awesome.css'

ReactDOM.render(
     <div>
     	<img src="../assets/images/naitumei.jpg" alt=""/>
     	<img src="../assets/images/3kb.jpg" alt=""/>
     	<img src="../assets/images/sc.png" alt=""/>
     	<img src="{{dogs}}" alt=""/>
     	<div className="fa fa-rocket">rocket</div>
     </div>,
	document.getElementById('root')
)
