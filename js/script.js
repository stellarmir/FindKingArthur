/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {
	'cg_airplane1': 'image.png',
	'cg_airplane2': 'image2.png'

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'airplane': 'airplane.jpg',
    'fuyuki': 'fuyuki.jpg',
	'book': 'book.jpg'

});


// Define the Characters
monogatari.characters ({
	'r': {
		name: '토오사카 린',
		color: '#5bcaff'
	},

	'e': {
		name: '에미야 시로',
		color: '#5bcaff',
		directory: 'siro',
		sprites: {
			normal: 'siro_default.png'
		}
	},

	'x': {
		name: '수수께끼의 히로인 X',
		color: '#5bcaff',
		directory: 'x',
		sprites: {
			normal: 'x_default.png',
			happy: 'x_happy.png'
		}
	},

	'st': {
		name: '승무원',
		color: '#fff132',
		directory: 'st',
		sprites: {
			normal: 'st_default.png'
		}
	},

	'a': {
		name: '기내방송',
		color: '#fff132'
	}
	}
);

monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene #f7f6f6 with fadeIn',
		'show notification Welcome',
	// 	{
	// 		'Input': {
	// 			'Text': 'What is your name?',
	// 			'Validation': function (input) {
	// 				return input.trim ().length > 0;
	// 			},
	// 			'Save': function (input) {
	// 				this.storage ({
	// 					player: {
	// 						name: input
	// 					}
	// 				});
	// 				return true;
	// 			},
	// 			'Revert': function () {
	// 				this.storage ({
	// 					player: {
	// 						name: ''
	// 					}
	// 				});
	// 			},
	// 			'Warning': 'You must enter a name!'
	// 		}
	// 	},
	// 	'y Hi {{player.name}} Welcome to Monogatari!',
	// 	{
	// 		'Choice': {
	// 			'Dialog': 'y Have you already read some documentation?',
	// 			'Yes': {
	// 				'Text': 'Yes',
	// 				'Do': 'jump Yes'
	// 			},
	// 			'No': {
	// 				'Text': 'No',
	// 				'Do': 'jump No'
	// 			}
	// 		}
	// 	}
	// ],

	// 'Yes': [
	// 	'y Thats awesome!',
	// 	'y Then you are ready to go ahead and create an amazing Game!',
	// 	'y I can’t wait to see what story you’ll tell!',
	// 	'end'
	// ],

	// 'No': [

	// 	'y You can do it now.',

	// 	'show message Help',

	// 	'y Go ahead and create an amazing Game!',
	// 	'y I can’t wait to see what story you’ll tell!',
	// 	'end'
		'"....나는 아발론의 골짜기로 간다. 그곳에서 이 깊은 상처를 고치리라." ——토머스 맬러리, 《아서왕의 죽음》',

		'show scene fuyuki with fadeIn',

		'고등학교를 졸업하자마자 짐을 싸게 될 줄은 몰랐다.',

		'라이가 씨가 어디에서 연을 댔는지, 영국 바스 근교의 작은 복원 공방에서 한동안 견습으로 지내게 되었다.',

		'공방에서 다루는 의뢰는 낡은 가구, 교회에서 떼어 온 금속 장식, 오래된 저택의 부속...', 

		'가끔은 의례용 검이나 갑옷 조각 등의 유물도 들어온다고 했다.',

		'정식 취업도, 유학도 아니지만, 2층 방 하나와 끼니를 얻는 대신 잡일을 거들고 어깨너머로 배우는 자리.',

		'서류는 그쪽에서 알아서 맞춰주었다.',

		"'손재주가 아깝잖냐라'며 등을 밀어주신 라이가 씨의 기대에 응하기로 했다.",

		'부서진 걸 원래대로 되돌려놓는 일이라면, 확실히 싫지 않으니까.',

		'린은 영국행 얘기를 듣고서는 예상한 바대로 한참을 캐물었다.',

		'r 영국? 어디? 누구 소개로? 공방 이름은?',

		'그러다 주변부의 소박한 공방이라는 걸 확인하고는 맥이 풀린 듯 한숨을 쉬었었지.',

		'r ……하아. 네가 영국에 간다기에 시계탑 근처라도 기웃거릴까 걱정했더니, 완전히 엉뚱한 곳이잖아.',

		'r 뭐, 마술협회에서 골치 썩는 것보단 골동품 닦는 게 훨씬 너답긴 하네.',

		'린은 후유키에 남아서 처리할 일들 때문에 몇주 뒤, 다른 공항에서 따로 떠나기로 했다.',

		'얼마간의 작별인 셈이다. 언제까지일지는 몰라도.',

		'show scene airplane with fadeIn',

		'그건 그렇고, 녀석의 말이 맞다.',

		'나는 마술 세계 한복판보다는 이런 일이 어울리는 인간이겠지.',

		'show scene book with fadeIn',

		'책장을 다시 넘긴다.',

		'《아서왕의 죽음》, 비행기에서 무엇을 해야 할 지 몰라 손에 잡히는 대로 가지고 온 게 하필 이 책이다.',

		'낯선 세계로 나아가면서 처음으로 몸 하나 의탁하러 가는 땅이, 그녀의 고향이라니.',

		'단지 우연히 좋은 기회가 생겼을 뿐이다. 그렇게 생각하고 있다.',

		'show scene airplane with fadeIn',

		'그런데도, 창밖의 금빛을 보고 있자면.',
		
		'어느 휴일의 하루는, 한 번쯤. 그녀가 서 있던 땅을 밟아볼 수도 있을까.',

		'——그런 부질없는 생각이.',

		'show character st normal',

		'st 기내식은 카레로 하시겠습니까, 비프로 하시겠습니까?',

		'st 뭐, 결국 카레를 고르는 거지만요.',
		
		'st 과정이 중요한거죠.',

		

		'승무원의 목소리에 고개를 들자.',

		'show character st normal at right with fadeIn',
		
		'show character e normal at left with fadeIn',

		'e 너는...!',
	
		'반사적으로 입 안에서 하나의 이름이 떠올랐다.',
	
		'그러나 그 이름은 목 끝에서 멎었다.',
	
		'키도, 머리색도, 눈동자 색도,',
	
		'얼굴도 완전히 똑같은데.',
	
		'그러나 무언가가 달랐다.',
	
		'뭐라 잘 설명할 순 없지만, 달리 표현하자면,',
	
		'바람의 무게가.',
	
		'한 때 그녀를 바라볼 때 마다 나는 느꼈었다.',
	
		'내 주변의 모든 공기가 그녀에게로 이끌려가는 감촉을.',
	
		'내가 숨쉬고, 만질 수 있는 모든 공기가 향하는 곳은 바로 그 하나의 방향이었다.',
	
		'하지만 지금은 그 바람의 감촉이 없다.',
	
		'나는 그녀를 너무 잘 알고 있다.',
	
		'똑같이 생긴 것 정도로는, 속지 않는다.',

		'e ...너는, 나의 세이버가 아니야.',



		'st 정확합니다.',
	
		'show character e normal at left',

		'hide character st',

		'show character x normal at right with fadeIn',

		'x 저는 수수께끼의 히로인 X. ——지금 이곳에 난무하는 알트리아 페이스를 제거하기 위해 파견되었습니다.',

		'e 지금 이 곳이라니..',

		'문득 주변을 둘러보니 승객들은 하나같이 깊이 잠들어 있었다.',

		'부자연스러울 만큼 고르게. 다른 승무원의 모습도 없다.',

		'e 이건 대체...',

		'x 이곳은 현실의 비행기가 아닙니다. 정확히는, 당신이 잠든 동안 겹쳐진 항로죠.',

		'x 물론, 원인은 바로 당신입니다.',

		'e 뭐라고?',

		'e 원인이라니... 내가?',

		'x 너무 갑작스러운가요?', 
	
		'x 알기 쉽게 예시를 하나 들자면 ——아발론으로 향하는 배에, 우연히 같은 자리를 얻은 셈일 뿐.',

		'농담에도 정도가 있지.',

		'아무렇지 않게 그 말을 입에 올리는 건 너무 심하잖아.',

		'x 아직도 이해를 못 하셨다는 얼굴이군요... 크흠. 어쩔 수 없죠.',

		'x 더 자세하게는, 모든 세계선을 향해서 당신의 무의식이 보내는 신호가 너무 강하기 때문입니다.',	
	
		'x 게다가 검색어가 지나치게 넓어요. 아서왕. 세이버. 알트리아. 금발. 검. ……식사량.',
		
		'e 식사량은 왜....',
		
		'x 글쎄요? 당신이 중요하게 생각하나 보죠.	',
		
		'x 어쨌든, 그 모든 가능성의 가장자리까지 당신의 무의식이 보내는 신호가 닿았어요.',
		
		"x 결국 여러 시공의 '얼굴'들이 이 항로로 끌려들어와버렸습니다.",
		
		'x 당신의 갈망이 애타게 부르는 이름은, 실은 그녀 한 사람만의 것이 아니거든요.',
		
		'여전히 잘 이해되지 않는 설명 뿐이었지만,',
		
		'적어도 그 말 한 마디에는 의문을 제기할 수가 없었다.',
		
		'e 그렇다면, 너는 뭘 하러 온 거야?',
		
		'x 자석을 끄는 방법은 둘뿐입니다. 끌어당겨지는 것을 전부 부수거나——끌어당기는 자가 끝까지 이해하거나.',
		
		'e 어느 쪽을 택했는데?',
		
		'x 상황에 따라 달라지겠죠.',
		
		'x 어쨌든, 카레로 하시겠습니까, 비프로 하시겠습니까	?',
		
		'x 사실 기내식 배급은 진작에 끝났기에 카레밖에 남지 않았지만요.',
		
		'x 뭐, 선택하는 과정이 중요한 법이죠.',
		
		'과연, 트레이 위에는 기내식 상자 하나만이 덩그러니 놓여 있었다.',
		
		'e 그럼, 일단 카레로...',
		
		'x 탁월한 선택입니다.',
		
		'선택이랄 것은 없었지만, 메뉴를 고르고 나서 그녀가 내미는 카레를 손으로 받아들었다.	',
		
		'그러다, 자연스레 그녀의 얼굴을 마주보게 되었다.',
		
		'이 녀석...	',
		
		'완전히 카레에서 눈을 떼지 못하고 있잖아, 침까지 꼴깍 삼키면서.',
		
		'e ...사실 식사는 됐어, 너 먹을래?',
		
		'x 사양은하지않겠습니다감사합니다잘먹겠습니다!',

		'show scene #f7f6f6 with fadeIn',

		'show image cg_airplane1 with fadeIn',
		
		'녀석은 뻔뻔하게도 내 옆자리에 털썩 앉았다.',
		
		'그리고, 실은 내내 이 순간만을 기다려왔다는 듯이 기내식 상자를 열어젖혔고,',
		
		'빛의 속도로 수저를 뜯은 뒤 순식간에 그 안에 든 카레를 해치우기 시작했다.',

		'hide image cg_airplane1 with fadeOut',

		'show image cg_airplane2 with fadeIn',
		
		'민첩한 손놀림을 보니, 비록 다른 존재일지라도 그녀의 무언가를 공유하는 건 사실인게 분명하다.',
		
		'이상한 기분,',
		
		'나의 세이버가 아니라는 사실은 알고 있는데도.',
		
		'맛있게 먹는 모습을 보니 왠지 마음이 가벼워진다.',
		
		'x 잘먹었습니다!!',

		'hide image cg_airplane2 with fadeOut',

		'show scene airplane with fadeIn',

		'show character e normal at left',

		'show character x normal at right',

		'x 아, 이건 후식을 위한 빵으로 보이는군요.',

		'x 이 정도는 당신에게 돌려드리겠습니다. 저도 그렇게 염치없진 않으니까요.',

		'e 이미 충분히...',

		{
			'Choice': {
				// 'Dialog': 'y Have you already read some documentation?',
				'InventoryBtn': {
					'Text': '빵을 받는다',
					'Do': 'jump story1'
				},
				'GiveBtn': {
					'Text': '그냥 너 먹어',
					'Do': 'jump Give'
				}
			}
		},

		'hide character x',

		'hide character siro'
	],
		
	'Give': [

		'show character e normal at left',

		'show character x normal at right',

		'그녀는 잠시 눈을 깜빡이더니 조금의 사양도 없이 빵을 도로 받았다. ',
		'엄청나게 먹고 싶었나 보네...',

		'한 번이라도 나에게 양보한 것만으로도 가상할 정도다.',

		'hide character x',

		'hide character e',


		'jump story1'
	],
	
	'story1': [

		'show character e normal at left',

		'show character x normal at right',

		'x 만일 저의 "선택"에 협조하실 거라면',	

		'x 이곳에 불시착한 알트리아 페이스들을 직접 찾아보세요.',	

		'x 당신이 아직 내려놓지 못한 것을 하나씩 풀어낸다면',	

		'x 이 거대한 신호도 꺼질 테니까요.',	

		'e 너는 같이 안 가는 거야?',

		'x 글쎄요, 도중에 마주칠 수도 있겠죠.',

		'x 아무튼, 좋은 여행 되시길.',

		'hide character x with fadeOut',

		'hide character e',

		'show character e normal',

		'순식간에 사라져버렸네...',
	
		'a 승객 여러분, 곧 착륙하겠습니다.',
	
		'a ——영면의 땅에 당도하신 것을 환영합니다.',

		'....',

		'hide character e',

		'show scene book with fadeIn',

		'안내방송에 놀라, 무릎 위에 올려두었던 책을 떨어트리고 말았다.',
		'좁은 이코노미 석이었기에 끙끙거리며 책을 다시 주웠다.',
		'내지에 먼지가 묻지는 않았는지 툭툭 털고 있자니, 문득 한 대목이 눈에 들어왔다.',
		'"왕은 죽지 않았다.',
		'다만, 섬으로 건너갔을 뿐이다."',

		'',
		'show scene #000000 with fadeIn',

		'아서왕을 찾습니다 체험판을 플레이해주셔서 감사합니다.'
		
	]
	
});