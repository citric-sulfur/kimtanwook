﻿const p = 'png'
const g = 'gif'
const j = 'jpg'

const dcConsArray = [
	['광대그만이야', 'png'],
	['광대따봉', 'png'],
	['광대큰결심', 'png'],
	
	['띠껍깡통', 'png'],
	['띠껍노', 'png'],
	['띠껍따봉', 'png'],
	['띠껍띠껍', 'png'],
	['띠껍실사', 'gif'],
	['띠껍쌍따봉', 'png'],
	['띠껍예스', 'png'],
	['띠껍옐로카드', 'png'],
	['띠껍음악', 'png'],
	['띠껍하트', 'png'],
	['띠껍후비적', 'png'],
	['띠껍레드카드', 'png'],
	
	['만두눈물', 'png'],
	['만두봇', 'png'],
	['만두심쿵', 'png'],
	['만두흑화', 'gif'],
	
	['핑키빈개추', 'gif'],
	['핑키빈고고혓', 'png'],
	['핑키빈비추', 'gif'],
	['핑키빈안녕', 'gif'],
	['핑키빈점프', p],
	['핑키빈코코낸내', 'png'],
	['핑키빈푸하하', 'png'],
	
	['페페놉', 'gif'],
	['페페댄스', 'gif'],
	['페페띠용', 'png'],
	['페페무슨일', 'jpg'],
	['페페앵그리', 'png'],
	['페페자살', 'png'],
	['페페절대', 'gif'],
	['페페혼란', 'jpg'],
	
	['제리감사', 'gif'],
	['제리불편', 'gif'],
	['제리안녕', 'gif'],
	['제리쾅쾅', 'gif'],
	['제리폭소', 'gif'],
	['제리피아노', 'gif'],
	['제리할짝', 'gif'],
	
	['이승윤놀람', 'png'],
	['이승윤따봉', 'gif'],
	['이승윤박수', 'gif'],
	['이승윤불만', 'gif'],
	
	['아찐개인이오', 'png'],
	['아찐시원해', 'png'],
	['아찐오', 'png'],
	['아찐우하하', 'png'],
	['아찐이러시는', 'png'],
	['아찐잘자', 'png'],
	['아찐히토미', 'png'],
	
	['냥경악', 'gif'],
	['냥들짝', 'jpg'],
	['냥슬픔', 'gif'],
	
	['우리핵박수', 'gif'],
	['우리핵아닌데', 'gif'],
	
	['페루감탄', 'gif'],
	['페루감동', 'gif'],
	
	['골똘', 'png'],
	['구라지롱', 'png'],
	['근데이제뭐함', 'png'],
	['크으으', 'png'],
	['여한없음', 'png'],
	['이대로만', 'png'],
	['좆같으면개추', 'png'],
	
	['힘의차이', 'png'],
	['계산중', j],
	['정말훌륭', 'png'],
	
	['푸하하', 'jpg'],
	['참잘했어요', 'jpg'],
	['정말고마워요', j],
	['이상해요', j],
	['어쩌라는거야', j],
	['안아줘요', j],
	['반가워요', j],
	['변태', j],
	['먹을만', j],
	
	['대부분은',g],
	['어케했노',g],
	
	['이풍당당',g],
	['문풍당당',g],
	['예풍당당',g],
	
	['실장쩝쩝',p],
	['고마워미도리',p],
	
	['녹차가루',p],
	['겉바속촉',g],
	
	['볼트따봉',p],
	['볼트불만',p],
	['볼트음주',p],
	
	['에펙푸하하',p],
	

	['선글띠용',g],
	['그건니가',j],
	
	
	['감정쓰레기통', 'png'],
	['터렛', 'png'],
	['버거지', 'png'],
];

console.log(dcConsArray);

dcConsData = [];

	for (var i = 0; i <= dcConsArray.length - 1; i++) {
		dcConsData.push({name:dcConsArray[i][0] + '.' +dcConsArray[i][1], keywords:[dcConsArray[i][0]]});
	}

console.log(dcConsData);
	
dcConsSelector = [];

dcConsSelector
	for (var i = 0; i <= dcConsArray.length - 1; i++) {
	dcConsSelector.push({"keywords": [dcConsArray[i][0]], "tags": [dcConsArray[i][0]], "path":"images/dccon/" + dcConsArray[i][0] + '.' + dcConsArray[i][1] });
	}	
		
console.log(dcConsSelector);

//var dcConsSelectorJson = JSON.stringify(dcConsSelector);

//console.log(dcConsSelectorJson);