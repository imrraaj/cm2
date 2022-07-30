import React from 'react';
import Faqitem from './Faqitem';
import { useContent } from '../utils/ContentContext';
import { Container, Title } from '@mantine/core';

export default function Faqs() {
  const content = useContent();
  return (
    <Container pt={64} pb={32} id="faqs">
      <div>
        <Title align="center" mb={32} style={{ color: 'white' }}>
          FAQs
        </Title>
        {content.faqs.map((item, _index) => (
          <Faqitem key={_index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </Container>
  );
}
