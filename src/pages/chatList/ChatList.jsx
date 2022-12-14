import React from 'react';
import TopBanner from '../../common/topBanner/TopBanner';
import TabMenu from '../../common/tabMenu/TabMenu';
import * as S from './ChatList.Style';

const ChatList = () => {
  return (
    <S.ChatListWrap>
      <S.ChatListTit>채팅 리스트 페이지</S.ChatListTit>
      <TopBanner type='top-basic-nav' />
      <S.ListCont>
        <S.List>
          <S.ChatWrap>
            <S.UserImg />
            <S.UserInfo>
              <S.UserNickName>숨참고딥다이브</S.UserNickName>
              <S.ChatInfo>
                <S.UserChat>모던 자바스크립트 팔렸나요?</S.UserChat>
                <S.ChatDate>2022.12.14</S.ChatDate>
              </S.ChatInfo>
            </S.UserInfo>
          </S.ChatWrap>
          <S.ChatWrap>
            <S.UserImg />
            <S.UserInfo>
              <S.UserNickName>꼬부기</S.UserNickName>
              <S.ChatInfo>
                <S.UserChat>책 취향이 너무 좋으셔서 연락드립니다☺️</S.UserChat>
                <S.ChatDate>2022.12.14</S.ChatDate>
              </S.ChatInfo>
            </S.UserInfo>
          </S.ChatWrap>
          <S.ChatWrap>
            <S.UserImg />
            <S.UserInfo>
              <S.UserNickName>처리짱</S.UserNickName>
              <S.ChatInfo>
                <S.UserChat>안녕하세요!!!</S.UserChat>
                <S.ChatDate>2022.12.14</S.ChatDate>
              </S.ChatInfo>
            </S.UserInfo>
          </S.ChatWrap>
        </S.List>
      </S.ListCont>
      <S.TabMenuWrap>
        <TabMenu />
      </S.TabMenuWrap>
    </S.ChatListWrap>
  );
};

export default ChatList;
