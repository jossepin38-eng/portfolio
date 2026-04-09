import { Mpop1, Mpop2, Mpop3 } from "../../imports/Work02-90-1806";
import { Konai, Konai1, Konai2, Konai3 } from "../../imports/Work03-90-1816";
import { Welstory, Welstory1, Welstory2 } from "../../imports/Work04-90-1826";

export interface ProjectData {
  year: string;
  id: string;
  title: string;
  description: string;
  // We will use this to render the content
}

export const projects = [
  {
    year: "2025",
    id: "work01",
    title: "ONBID",
    description: "(캠코)한국자산관리공사 차세대 국가자산처분시스템(온비드) 반응형 웹 & 이용기관 리디자인 / 디자인 PL",
  },
  {
    year: "2024",
    id: "work02",
    title: "Samsung stock",
    description: "삼성증권 운영(UI 신규 페이지 구축 및 고도화, 이벤트 및 monino 프로모션 기획·설계) / 디자인 PL",
  },
  {
    year: "2023",
    id: "work03",
    title: "KONAI MOBILITY",
    description: "코나아이 모빌리티 승객앱 동백택시 고도화 및 신규페이지 구축 / 디자인 PL(참여도 60%)",
  },
  {
    year: "2022",
    id: "work04",
    title: "WELSTory mall",
    description: "웰스토리몰 적응형 웹사이트 리뉴얼 구축  / 디자인 PL(참여도 50%)",
  },
  {
    year: "2021",
    id: "xeogen",
    title: "XEOGEN",
    description: "KB금융 디지털 아카이브(참여도 30%), 현대트랜시스 신규 ESG 구축(참여도 100%)",
  },
  {
    year: "2020",
    id: "personnel",
    title: "ministry of personnel management",
    description: "인사혁신처 교육 플랫폼 구축(1차 사업 참여도 100%)",
  },
  {
    year: "2019",
    id: "hyundai",
    title: "HYUNDAI KOMOCO",
    description: "현대자동차 글로벌 온라인 판매시스템 구축(싱가폴, 호주, 인도) / 디자인 PL(참여도 50%)",
  },
  {
    year: "2018",
    id: "hana",
    title: "hANA MEMBERS",
    description: "하나멤버스 하이브리드 모바일앱 구축 / 디자인 PL(참여도 50%)",
  }
];

export const allYears = ["2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018"];

export const bottomNavItems = [
  { label: "work01", id: "work01" },
  { label: "Samsung stock", id: "work02" },
  { label: "KONAI MOBILITY", id: "work03" },
  { label: "WELSTory mall", id: "work04" },
  { label: "XEOGEN", id: "xeogen" },
  { label: "ministry of personnel management", id: "personnel" },
  { label: "HYUNDAI KOMOCO", id: "hyundai" },
  { label: "hANA MEMBERS", id: "hana" }
];
