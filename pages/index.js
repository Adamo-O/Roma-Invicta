import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Abril_Fatface } from '@next/font/google'
import { useState, useEffect } from 'react'
import { PostActivityModal } from '../components/postActivityModal'
import { Button } from 'reactstrap'
import { Navbar } from '../components/navbar';

const abril_fatface = Abril_Fatface({ weight: ['400'], subsets: ['latin'] })

export default function Activities() {
  const [showForm, setShowForm] = useState(false);
  const [activities, setActivities] = useState();

  const postData = async (activityData) => {
    const res = await fetch('/api/activity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(activityData)
    });
    setActivities(await res.json());
  }
  
  return (
    <div>
      <Navbar />
      <Head>
        <title>Agora</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <h1 className={`${abril_fatface.className} ${styles.header}`} >
          Agora
        </h1>
        <p className={`${styles.text}`}>Which activities will you partake in?</p>

        {
          activities && activities.map(activity => (
            <div>
              <p className={`${abril_fatface.className} ${styles.subheader}`}>{activity.name}</p>
              <div className={`${styles.container}`}>
                <p className={`${styles.text}`}>{activity.description}</p>
                <div>
                  <p className={`${styles.text}`}>
                    test
                  </p>
                </div>
              </div>
            </div>
          ))
        }


        
        <Button onClick={() => setShowForm(true)}>Post an Activity</Button>
      </main>
      <PostActivityModal
        setShowForm={setShowForm}
        showForm={showForm}
        postData={postData}
      >
        Inside the form
      </PostActivityModal>
    </div>
  )
}
