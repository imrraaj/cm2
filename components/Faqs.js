import React, { useState } from "react";
import { Container, Title, Text, Box, Button } from "@mantine/core";
import { RiArrowUpDownLine } from "react-icons/ri";
import { MdCloseFullscreen } from "react-icons/md";
import Collapsible from "react-collapsible";

import styles from "../styles/Faqitem.module.scss";
import Link from "next/link";

const faqs = [
  {
    question: "Why us?",
    answer: `If you're looking for a professional team with experience at what they do then crypto maxxis is the choice for you. Our services have been chosen by lots of top tier projects and exchanges. We're responsive and also considerate of projects' needs.`,
  },
  {
    question: "Whats AMA? ",
    answer: `The acronym AMA means "Ask Me Anything". An AMA is a type of informal interview in which the interviewee is open to questions from the public.`,
  },
  {
    question: "Do we promote NFT projects? ",
    answer: `Yes we're open to it`,
  },
  {
    question: "How to contact us?",
    answer: ``,
    link: "https://t.me/thedeltaw",
  },
];
export default function Faqs() {
  return (
    <Container pt={64} pb={32} id="faqs">
      <div>
        <Title align="center" mb={32} style={{ color: "white" }}>
          FAQs
        </Title>
        {faqs.map((item, _index) => (
          <Faqitem key={_index} question={item.question} answer={item.answer} link={item.link} />
        ))}
      </div>
    </Container>
  );
}

function Faqitem({ question, answer, link }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Collapsible
        trigger={
          <Box className={styles.que_container}>
            <Text color="hsl(0 0% 95%)" weight="bolder" size="lg">
              {question}
            </Text>
            <button onClick={() => setIsOpen(!isOpen)} className="btn">
              {isOpen ? <MdCloseFullscreen /> : <RiArrowUpDownLine />}
            </button>
          </Box>
        }
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
      >
        <Box my="0.75em">
          <Text color="hsl(0 0% 80%)" size="md">
            {answer}
          </Text>
          {link && (
            <Link href={link} passHref>
              <Button component="a" variant="outline">
                Contact
              </Button>
            </Link>
          )}
        </Box>
      </Collapsible>
    </div>
  );
}
