'use client';

import axios from 'axios';
import React, { useState } from 'react';
import { PiPaperPlaneTiltBold } from 'react-icons/pi';

import ButtonCircle from '@/shared/Button/ButtonCircle';
import Input from '@/shared/Input/Input';

const GetInTouch = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  /* eslint-disable no-useless-escape */
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const handleSubmit = async () => {
    try {
      if (!email) {
        setError('Please provide an email');
        return;
      }
      if (!email.match(emailRegex)) {
        setError('Please provide valid email');
        return;
      }
      const result = await axios.post('https://api.web3forms.com/submit', {
        reason: 'newsletter',
        email,
        access_key: '',
      });
      if (result.data) {
        setSuccess('successfully subscribed to newsletter');
      }
    } catch (e) {
      setError('failed to subscribe to newsletter');
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-medium">Get in touch</h3>
      <p className="text-neutral-500 dark:text-neutral-300">
        Question or feedback? we love to hear from you
      </p>
      <div className="relative mt-5 flex max-w-sm items-center">
        <Input
          required
          aria-required
          placeholder="Email address"
          type="email"
          rounded="rounded-full"
          className={`${error && 'ring-red-400'} ${
            success && 'ring-green-400'
          } border border-primary bg-transparent placeholder:text-neutral-500 dark:placeholder:text-neutral-300`}
          onChange={(e) => setEmail(e.target.value)}
        />

        <ButtonCircle
          onClick={() => handleSubmit()}
          className="absolute right-1 top-1/2 -translate-y-1/2 text-white"
        >
          <PiPaperPlaneTiltBold className="text-xl" />
        </ButtonCircle>
      </div>
      {error && <p className="ml-2 mt-1 text-xs text-red-500">{error}</p>}
      {success && <p className="ml-2 mt-1 text-xs text-green-500">{success}</p>}
    </div>
  );
};

export default GetInTouch;
