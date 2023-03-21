import { useState, useRef, useEffect } from 'react';
import { ParentContainer } from './index.style';
import { MessageBoxFooter, MessageText } from '../../molecules';
import { MessageStatus, MessageVariantType } from '../../../utils';
import data from './data';

const Component = (props) => {
  const parentRef = useRef(null);

  useEffect(() => {
    const parent = parentRef.current;
    parent.scrollTop = parent.scrollHeight;
  }, []);

  return (
    <ParentContainer ref={parentRef}>
      {data.map((i) => (
        <MessageText key={i.id} text={i.text} time={Date.now()} variant={i.index % 3 === 0 ? MessageVariantType.SENDER : MessageVariantType.RECEIVER} messageStatus={(i.index % 3 === 0 && i.index % 2 === 0 ? MessageStatus.DELIVERED: MessageStatus.READ)}/>
      ))}
      <MessageBoxFooter />
    </ParentContainer>
  );
};

export default Component;
