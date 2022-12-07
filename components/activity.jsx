import styles from '../styles/Home.module.css'

const Activity = ({ activity }) => {
  return (
    <div className={`${styles.container}`}>
      <div className={styles.text}>
        <p className={styles.activityName}>{activity.name}</p>
        <p>{activity.description}</p>
        <p>
          <b>Organizer:</b> {activity.planner}
        </p>
        <p>
          <b>Where?</b> {activity.location}
        </p>
        <p>
          <b>When?</b> {convertDate(activity.date)} at {activity.time}
        </p>
        {
          activity.requestVolunteers &&
          <p>
            <b>Volunteer Request:</b> {activity.volunteerDescription}
          </p>
        }
      </div>
    </div>
  )

  function convertDate(date) {
    const newDate = new Date(date);
    return newDate.toDateString();
  }
}

export default Activity