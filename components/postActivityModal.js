import { useState } from 'react';
import { Button, Form, FormGroup, Row, Col, Label, Input, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const PostActivityModal = ({ showForm, setShowForm, postData, eventOrganizerName }) => {
  const emptyFormData = {
    name: '',
    planner: eventOrganizerName,
    description: '',
    location: '',
    date: '',
    time: '',
    requestVolunteers: false,
    volunteerDescription: ''
  }
  const [formData, setFormData] = useState(emptyFormData)

  const handleChange = (e) => {
    setFormData(values => ({...values, [e.target.name] : (e.target.type === 'checkbox' ? e.target.checked : e.target.value)}));
  }

  const handleSumbit = () => {
    postData(formData);
    setShowForm(false);
    setFormData(emptyFormData)
  }

  return (
    <div>
      <Modal isOpen={showForm} centered={true}>
        <ModalHeader>Post an Activity</ModalHeader>
        <ModalBody>
          <Form>
            <Label for='activityName'>
              Activity Name
            </Label>
            <Input id='activityName' 
              type='text' 
              name='name' 
              value={formData.name || ''} 
              onChange={handleChange} 
              className='mb-3' />

            <Label for='activityPlanner'>
              Activity Organizer
            </Label>
            <Input id='activityPlanner' 
              disabled
              type='text' 
              name='planner' 
              value={eventOrganizerName} 
              onChange={handleChange} 
              className='mb-3' />

            <Label for='activityDescription'>
              Description
            </Label>
            <Input id='activityDescription' 
              type='textarea' 
              name='description' 
              value={formData.description || ''} 
              onChange={handleChange} 
              className='mb-3' />

            <Label for='activityLocation'>
              Location
            </Label>
            <Input id='activityLocation' type='text' name='location' value={formData.location || ''} onChange={handleChange} className='mb-3' />

            <Row>
              <Col>
                <Label for='activityDate'>
                  Date
                </Label>
                <Input id='activityDate' type='date' name='date' value={formData.date || ''} onChange={handleChange} className='mb-3' />
              </Col>
              <Col>
                <Label for='activityTime'>
                  Time
                </Label>
                <Input id='activityTime' type='time' name='time' value={formData.time || ''} onChange={handleChange} className='mb-3' />
              </Col>
            </Row>
            
            <Label for='activityRequestVolunteers' className='pe-1'>
              Request volunteers
            </Label>
            <Input id='activityRequestVolunteers' type='checkbox' name='requestVolunteers' value={formData.requestVolunteers || ''} onChange={handleChange} className='mb-3' />
            {
              formData.requestVolunteers &&
              <div>
                <Label for='activityVolunteerDescription'>
                  Volunteer description
                </Label>
                <Input id='activityVolunteerDescription' type='textarea' name='volunteerDescription' checked={formData.volunteerDescription || ''} onChange={handleChange} className='mb-3' />
              </div>
            }
            <br />
            <Button onClick={handleSumbit}>
              Submit
            </Button>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setShowForm(false)}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
};