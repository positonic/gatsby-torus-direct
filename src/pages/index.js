import React from 'react'
import { Link } from 'gatsby'
import DirectWebSdk from '@toruslabs/torus-direct-web-sdk'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
// import Loadable from "@loadable/component"

// const LoadableBuyButton = Loadable(() => import("./ShopifyBuyButton"))

const torus = new DirectWebSdk({
  baseUrl: 'http://localhost:8000/serviceworker/',
  GOOGLE_CLIENT_ID:
    '900646569779-qgs70nf540ss4dqr8dqirlu5f9g4kc5h.apps.googleusercontent.com',
  proxyContractAddress: '0x4023d2a0D330bF11426B12C6144Cfb96B7fa6183', // details for test net
  network: 'ropsten', // details for test net,
  enableLogging: true
})

async function initTorus () {
  await torus.init()
}

async function login () {
  console.log('in login')

  await initTorus()

  const userInfo = await torus.triggerLogin('google', 'google-giveth')

  console.log(`userInfo : ${JSON.stringify(userInfo, null, 2)}`)
}

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <button onClick={login}>Log in</button>
  </Layout>
)

export default IndexPage
