import styled from 'styled-components';
import sprite from '../../assets/css_sprites.png';
// 주석처리된 코드는 추후 반응형 작업 시 수정 예정입니다

export const ChatRoom = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 390px;
  height: 820px;
  /* min-height: calc(100vh - 61px);
  overflow-y: scroll; */
  background-color: #f2f2f2;
`;

export const ChatRoomTit = styled.h2`
  /* ir */
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

export const TopBannerCont = styled.div`
  position: fixed;
  top: 0;
`;

export const ChatCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 10px;
  height: 820px;
  margin-top: 48px;
  margin-bottom: 61px;
  /* max-height: calc(100vh - 110px); */
  /* overflow-y: scroll; */
  padding: 20px 16px;
`;

export const YourMsgCont = styled.div`
  display: flex;
`;

export const YourMsgProfileImg = styled.img`
  width: 42px;
  height: 42px;
  margin-right: 12px;
  border-radius: 50%;
  border: 0.5px solid var(--sub2-text-color);
`;

export const YourMsgTxt = styled.p`
  max-width: 240px;
  padding: 12px;
  margin-right: 6px;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  border-top-left-radius: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: var(--main-text-color);
  background-color: #ffffff;
`;

export const YourMsgImg = styled.img`
  width: 240px;
  height: 240px;
  margin-right: 6px;
  border-radius: 10px;
`;

export const MyMsgCont = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const MyMsgTxt = styled.p`
  max-width: 240px;
  padding: 12px;
  margin-left: 6px;
  border-radius: 10px;
  border-top-right-radius: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  background-color: var(--main-color);
`;

export const MyMsgImg = styled.img`
  width: 240px;
  height: 240px;
  margin-left: 6px;
  border-radius: 10px;
`;

export const CreatedTime = styled.p`
  align-self: flex-end;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  color: var(--sub-text-color);
`;

export const ChatForm = styled.form`
  position: absolute;
  /* position: fixed; */
  bottom: 0;
  display: flex;
  align-items: center;
  gap: 18px;
  width: 390px;
  padding: 12px 16px;
  border-top: 0.5px solid var(--sub2-text-color);
  background-color: #ffffff;
`;

export const FileInpLab = styled.label`
  width: 36px;
  height: 36px;
  background: url(${sprite}) -36px -0px / 146px 132px;
  cursor: pointer;
`;

export const TxtInp = styled.input`
  border: none;
  outline: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: var(--main-text-color);
  &::placeholder {
    color: #c4c4c4;
  }
`;

export const SubmitBtn = styled.button`
  margin-left: auto;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #c4c4c4;
`;
