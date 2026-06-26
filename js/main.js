'use strict';
/* global Monogatari */
/* global monogatari */

/**
 * =============================================================================
 * This is the file where you should put all your custom JavaScript code,
 * depending on what you want to do, there are 3 different places in this file
 * where you can add code.
 *
 * 1. Outside the $_ready function: At this point, the page may not be fully
 *    loaded yet, however you can interact with Monogatari to register new
 *    actions, components, labels, characters, etc.
 *
 * 2. Inside the $_ready function: At this point, the page has been loaded, and
 *    you can now interact with the HTML elements on it.
 *
 * 3. Inside the init function: At this point, Monogatari has been initialized,
 *    the event listeners for its inner workings have been registered, assets
 *    have been preloaded (if enabled) and your game is ready to be played.
 *
 * You should always keep the $_ready function as the last thing on this file.
 * =============================================================================
 **/

const { $_ready, $_ } = Monogatari;

// 1. Outside the $_ready function:

// Monogatari 엔진 시스템 UI용 한국어 번역 데이터 등록
const koTranslation = {
	'AdvanceHelp': '게임을 진행하려면 스페이스바를 누르거나 클릭하세요.',
	'AllowPlayback': '이 웹사이트가 오디오를 재생할 수 있도록 허용해 주세요.',
	'Audio': '오디오',
	'AutoPlay': '자동 재생',
	'AutoPlayButton': '자동 재생',
	'AutoPlaySpeed': '자동 재생 속도',
	'Back': '뒤로가기',
	'BackButton': '뒤로가기',
	'Backward': '이전으로',
	'Cancel': '취소',
	'Close': '닫기',
	'Confirm': '확인',
	'Credits': '크레딧',
	'Delete': '삭제',
	'DialogLog': '대사 로그',
	'DialogLogButton': '대사 로그',
	'Download': '다운로드',
	'DownloadSave': '세이브 파일 다운로드',
	'ExtensionInstall': '확장 기능 설치',
	'FullScreen': '전체 화면',
	'Gallery': '갤러리',
	'Game': '게임',
	'Gamepad': '게임패드',
	'Help': '도움말',
	'Hide': '숨기기',
	'HideButton': '대화창 숨기기',
	'iOSAudioWarning': '오디오 설정은 iOS에서 지원되지 않습니다.',
	'KeyboardShortcuts': '키보드 단축키',
	'Language': '언어',
	'Load': '불러오기',
	'LoadAutoSave': '자동 저장 불러오기',
	'LoadAutoSaveSlots': '자동 저장 슬롯',
	'LoadButton': '불러오기',
	'LoadError': '세이브 데이터를 불러오는 데 실패했습니다.',
	'Loading': '로딩 중...',
	'LoadingImages': '이미지 로딩 중...',
	'LoadingMessage': '리소스를 불러오는 동안 잠시만 기다려 주세요.',
	'LoadSlots': '세이브 슬롯',
	'LocalStorageWarning': '로컬 저장소는 이 브라우저에서 사용할 수 없습니다.',
	'Log': '로그',
	'Music': '음악',
	'NewContent': '새로운 콘텐츠가 있습니다. 페이지를 새로고침하여 최신 버전을 받으세요.',
	'NewGame': '새로운 게임',
	'Next': '다음',
	'No': '아니오',
	'NoAudioSupport': '이 브라우저는 오디오 기능을 지원하지 않습니다.',
	'NoAutoSavedGames': '자동 저장된 게임이 없습니다.',
	'NoDialogsAvailable': '대화 로그가 없습니다.',
	'NoSavedGames': '저장된 게임이 없습니다.',
	'NoSlots': '빈 슬롯이 없습니다.',
	'OK': '확인',
	'Orientation': '화면 방향을 바꿔주세요.',
	'OrientationWarning': '플레이하려면 기기를 회전해 주세요.',
	'Overwrite': '덮어쓰기',
	'QuickButtons': '퀵 메뉴',
	'QuickMenu': '퀵 메뉴',
	'Quit': '종료',
	'QuitButton': '게임 종료',
	'QuitWarning': '정말 종료하시겠습니까? 저장되지 않은 진행 상황은 잃게 됩니다.',
	'Resolution': '해상도',
	'Save': '저장하기',
	'SaveButton': '저장',
	'SaveError': '게임을 저장하는 데 실패했습니다.',
	'SaveInSlot': '슬롯에 저장',
	'SaveSuccess': '게임이 성공적으로 저장되었습니다.',
	'SelectLanguage': '언어를 선택하세요',
	'SelectYourLanguage': '언어를 선택해 주세요',
	'Settings': '설정',
	'SettingsButton': '설정',
	'Show': '보이기',
	'Skip': '스킵',
	'SkipButton': '스킵 모드 시작',
	'SlotDeletion': '이 슬롯을 삭제하시겠습니까?',
	'SlotDeletionWarning': '이 슬롯을 삭제하시겠습니까?',
	'SlotOverwrite': '이 슬롯에 덮어쓰시겠습니까?',
	'SlotOverwriteWarning': '이 슬롯에 덮어쓰시겠습니까?',
	'Sound': '효과음',
	'Share': '공유',
	'Start': '시작',
	'Stop': '중지',
	'TextSpeed': '텍스트 속도',
	'Time': '시간',
	'Video': '비디오',
	'Voice': '목소리',
	'Volume': '음량',
	'Welcome': '환영합니다',
	'Windowed': '창 모드',
	'Yes': '예'
};

monogatari.translation('ko', koTranslation);
monogatari.translation('한국어', koTranslation);
monogatari.translation('Korean', koTranslation);

$_ready (() => {
	// 2. Inside the $_ready function:

	monogatari.init ('#monogatari').then (() => {
		// 3. Inside the init function:

	});
});
