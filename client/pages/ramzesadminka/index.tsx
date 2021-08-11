import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons"
import { Button, Input } from "antd"
import Head from "next/head"
import React from "react"
import { axios } from "../../core"
import * as crypto from "crypto"

import style from "./style.module.scss"
import Link from "next/link"
import Layout from "components/Layout"

interface IForm {
	login?: string
	password?: string
}

const Ramzesadminka: React.FC = () => {
	return (
		<Layout title='Главная'>
			<h1>Главная</h1>
		</Layout>
	)
}

export default Ramzesadminka
