// Copyright (c) 2021 Terminus, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from 'react';
import PageContent from '~/layout/common/page-content';
import { Form, Input, Select, Button } from 'antd';
import { IT_SIZE, COMPANY_SIZE, PURPOSE, NAME_MAP } from 'pages/contact-us/constant';
import { getFormFieldsValue } from 'common/utils';
import { submitContactInfo } from '~/services/contact';
import { CustomModal } from 'common';
import RegularMap from 'common/utils/reg-rules';
import { map } from 'lodash';
import i18n from '~/i18n';
import './index.scss';

const { Item: FormItem } = Form;

interface IFormData extends CONTACT.contactUs {
  otherPurpose?: string;
}

const modalInfo = `${i18n.t('submitted successfully!')} \n\r${i18n.t('thank you for your attention! We will contact you as soon as possible!')}`;

const validator = (field: string) => (_rule: unknown, value: any) => {
  const val = value?.trim();
  if (val && !RegularMap[field].pattern.test(val)) {
    return Promise.reject(new Error(RegularMap[field].message));
  }
  return Promise.resolve();
};


const ContactUs = () => {
  const [formRef] = Form.useForm();
  const [showOtherPurpose, setShowOtherPurpose] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const removeSpace = (field: string) => (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const val = e.target.value;
    formRef.setFieldsValue({
      [field]: val.trim(),
    });
  };

  const handleCancel = () => {
    window.history.go(-1);
  };

  const handleChangePurpose = (key: string) => {
    setShowOtherPurpose(key === PURPOSE.other.value);
    formRef.setFieldsValue({
      otherPurpose: undefined,
    });
  };

  const handleSubmit = async () => {
    const { error, data } = await getFormFieldsValue<IFormData>(formRef);
    if (error) {
      return;
    }
    const { otherPurpose, ...rest } = data;
    if (otherPurpose) {
      rest.purpose = otherPurpose;
    }
    const res = await submitContactInfo(rest).catch((e) => e);
    if (res.success) {
      toggleModal();
    }
  };

  return (
    <div className="erda-contact-us">
      <div className="full-width-header">
        <div className="erda-contact-us-header v-flex-box">
          <p className="title">{i18n.t('try the enterprise digital platform (Erda Cloud) now')}</p>
          <p className="title-desc">{i18n.t('please fill in your real information in order to pass the review as soon as possible and start the trial')}</p>
        </div>
      </div>
      <PageContent>
        <Form form={formRef} className="form-wrap pt20" layout="vertical">
          <FormItem
            label={NAME_MAP.realname}
            name="realname"
            rules={[
              { required: true, message: i18n.t('please enter {name}', { name: NAME_MAP.realname }) },
            ]}
          >
            <Input autoComplete="off" autoFocus onBlur={removeSpace('realname')} />
          </FormItem>
          <FormItem
            label={NAME_MAP.mobile}
            name="mobile"
            rules={[
              { required: true, message: i18n.t('please enter {name}', { name: NAME_MAP.mobile }) },
              { validator: validator('mobile') },
            ]}
          >
            <Input autoComplete="off" onBlur={removeSpace('mobile')} />
          </FormItem>
          <FormItem
            label={NAME_MAP.email}
            name="email"
            rules={[
              { required: true, message: i18n.t('please enter {name}', { name: NAME_MAP.email }) },
              { validator: validator('email') },
            ]}
          >
            <Input autoComplete="off" onBlur={removeSpace('email')} />
          </FormItem>
          <FormItem
            label={NAME_MAP.position}
            name="position"
            rules={[
              { required: true, message: i18n.t('please enter {name}', { name: NAME_MAP.position }) },
            ]}
          >
            <Input autoComplete="off" onBlur={removeSpace('position')} />
          </FormItem>
          <FormItem
            label={NAME_MAP.company}
            name="company"
            rules={[
              { required: true, message: i18n.t('please enter {name}', { name: NAME_MAP.company }) },
            ]}
          >
            <Input autoComplete="off" onBlur={removeSpace('company')} />
          </FormItem>
          <FormItem
            label={NAME_MAP.company_size}
            name="company_size"
            rules={[
              { required: true, message: i18n.t('please select {name}', { name: NAME_MAP.company_size }) },
            ]}
          >
            <Select>
              {
                COMPANY_SIZE.map(({ name, value }) => {
                  return <Select.Option value={value} key={value}>{name}</Select.Option>;
                })
              }
            </Select>
          </FormItem>
          <FormItem
            label={NAME_MAP.it_size}
            name="it_size"
            rules={[
              { required: true, message: i18n.t('please select {name}', { name: NAME_MAP.it_size }) },
            ]}
          >
            <Select>
              {
                IT_SIZE.map(({ name, value }) => {
                  return <Select.Option value={value} key={value}>{name}</Select.Option>;
                })
              }
            </Select>
          </FormItem>
          <FormItem
            label={NAME_MAP.purpose}
            name="purpose"
            rules={[
              { required: true, message: i18n.t('please select {name}', { name: NAME_MAP.purpose }) },
            ]}
          >
            <Select onChange={handleChangePurpose}>
              {
                map(PURPOSE, ({ name, value }) => {
                  return <Select.Option value={value} key={value}>{name}</Select.Option>;
                })
              }
            </Select>
          </FormItem>
          {
            showOtherPurpose ? (
              <FormItem
                label={NAME_MAP.otherPurpose}
                name="otherPurpose"
                rules={[
                  { required: true, message: i18n.t('please enter {name}') },
                ]}
              >
                <Input.TextArea autoComplete="off" autoSize={{ minRows: 3, maxRows: 10 }} onBlur={removeSpace('otherPurpose')} />
              </FormItem>
            ) : null
          }
          <div>
            <Button type="primary" onClick={handleSubmit}>{i18n.t('submit')}</Button>
            <Button className="ml12" onClick={handleCancel}>{i18n.t('cancel')}</Button>
          </div>
        </Form>
        <CustomModal title={i18n.t('Apply for trial')} visible={modalVisible} toggleModal={toggleModal}>{modalInfo}</CustomModal>
      </PageContent>
    </div>
  );
};

export default ContactUs;
