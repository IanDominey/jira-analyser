/* @flow */
import * as React from 'react'
import Modal from 'react-responsive-modal'
import { Button, Col, Form as BsForm, FormGroup, Input, Label } from 'reactstrap'
import type { FormRenderProps } from 'react-final-form'
import { Field, Form } from 'react-final-form'
import type { AuthenticationState } from '../reducers/types'
import { connect } from 'react-redux'
import type { AuthenticationAction } from '../actions/types'
import { authenticate } from '../actions/jira'

const required = value => (value ? undefined : 'Required')

export type RowProps = {
  label: string,
  name: string,
  placeholder?: string,
  type: string
}

const FormRow: React.StatelessFunctionalComponent<RowProps> = (props: RowProps): React.Element<typeof FormGroup> => {
  return (
    <Field
      name={props.name}
      validate={required}
      render={({input, meta}) => (
        <FormGroup row>
          <Label for={props.name} sm={3}>{props.label}</Label>
          <Col sm={8}>
            <Input {...input} type={props.type} id={props.name} placeholder={props.placeholder || ''}/>
            {meta.touched && meta.error && <span>{meta.error}</span>}
          </Col>
        </FormGroup>
      )}/>
  )
}

const AuthForm: React.StatelessFunctionalComponent<FormRenderProps> = ({handleSubmit, submitting, invalid}: FormRenderProps) => {
  return (
    <BsForm onSubmit={handleSubmit}>
      <FormRow label='Jira Url' name='jiraUrl' placeholder='http://my.jira.url' type='url'/>
      <FormRow label='Username' name='username' placeholder='username' type='text'/>
      <FormRow label='Password' name='password' type='password'/>
      <Button type='submit' id='submit' disabled={submitting || invalid}>Sign In</Button>
    </BsForm>
  )
}

const onSubmit = (): void => {}

type AuthProps = {
  authenticated: boolean,
  authenticate: (string, string, string) => AuthenticationAction
}

const Authenticator: React.StatelessFunctionalComponent<AuthProps> = ({authenticated}: AuthProps) => {
  const styles = {
    modal: {
      maxWidth: '800px',
      width: '50%'
    }
  }
  return (
    <Modal open={!authenticated} closeOnEsc={false} closeOnOverlayClick={false} center={true} showCloseIcon={false}
      styles={styles} onClose={() => {}}>
      <h1>Connect to Jira</h1>
      <Form
        onSubmit={onSubmit}
        render={AuthForm}>
      </Form>
    </Modal>
  )
}

const mapStateToProps = ({authenticated}: AuthenticationState) => {
  return {authenticated}
}

const mapDispatchToProps = dispatch => {
  return {
    authenticate: (url, username, password) => dispatch(authenticate(url, username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Authenticator)
