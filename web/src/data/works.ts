export type WorkLanguage = 'zh' | 'en'

export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}

export type WorkItem = WorkListItem

export interface WorkGroup {
  heading: string
  items: string[]
}

export interface WorkSection {
  id: string
  no: string
  title: string
  tagline: string
  items?: WorkListItem[]
  groups?: WorkGroup[]
  awards?: string[]
  footer?: string
}

export interface WorksLang {
  title: string
  closeLabel: string
  openLabel: string
  hint: string
  awardsLabel: string
  visitLabel: string
  detailPlaceholder: string
  phImageLabel: string
  phButtonLabel: string
  countLabel: (n: number) => string
  sections: WorkSection[]
}

export type WorksCopy = WorksLang

export const WORKS: Record<WorkLanguage, WorksLang> = {
  "zh": {
    "title": "项目经历",
    "closeLabel": "返回",
    "openLabel": "展开作品",
    "hint": "继续下滑",
    "awardsLabel": "项目成果",
    "visitLabel": "查看完整项目",
    "detailPlaceholder": "项目详情",
    "phImageLabel": "项目预览",
    "phButtonLabel": "打开项目",
    "countLabel": (n: number) => `${n} 个项目`,
    "sections": [
      {
        "id": "project-2",
        "no": "01",
        "title": "产品宣讲与公众号运营",
        "tagline": "宣传选题｜产品资料｜活动执行｜合作跟进",
        "items": [
          {
            "name": "AI教育产品宣讲与公众号运营",
            "meta": "AI Education Product Presentations & WeChat Content",
            "slug": "ai-education-partnership",
            "link": `${import.meta.env.BASE_URL}projects/ai-education-partnership/case_study.html`,
            "tags": [
              "需求整理：归档100+条反馈，明确宣传选题",
              "内容制作：30+篇指南、教程、FAQ及应用案例",
              "活动与合作：高校现场组织，东南亚协议与交接跟进",
              "反馈迭代：10条建议，实习期核心功能使用率+30%"
            ]
          }
        ]
      },
      {
        "id": "project-1",
        "no": "02",
        "title": "市场活动与宣传运营",
        "tagline": "活动策划｜宣传内容｜合作推广｜AI复盘",
        "items": [
          {
            "name": "AI资讯产品市场活动与宣传运营",
            "meta": "AI Information Product Campaigns & Promotional Content",
            "slug": "ai-news-dashboard",
            "link": `${import.meta.env.BASE_URL}projects/ai-news-dashboard/case_study.html`,
            "tags": [
              "活动执行：线上拉新策划，科技活动宣传与现场支持",
              "宣传制作：100+条内容，配合博主筛选和发布跟进",
              "AI应用：辅助文案创意、整理数据与制作运营看板",
              "效果复盘：注册较前周+50%，首次专题创建率相对约+15%"
            ]
          }
        ]
      },
      {
        "id": "project-4",
        "no": "03",
        "title": "新品宣传与渠道协作",
        "tagline": "新品选题｜英文内容｜社媒执行｜渠道复盘",
        "items": [
          {
            "name": "ZUS Coffee新品宣传与社媒执行",
            "meta": "ZUS Coffee Launch Content & Channel Coordination",
            "slug": "zus-everywhere",
            "link": `${import.meta.env.BASE_URL}projects/zus-everywhere/case_study.html`,
            "tags": [
              "新品选题：消费者与竞品信息转化为宣传主题",
              "社媒执行：50条Instagram内容，拍摄剪辑与英文文案",
              "渠道协同：线上首发及FamilyMart宣传素材与排期",
              "内容复盘：15+次复盘，协同带动账号粉丝增长1.1w+"
            ]
          }
        ]
      }
    ]
  },
  "en": {
    "title": "Project Experience",
    "closeLabel": "Back",
    "openLabel": "Open case",
    "hint": "Scroll to continue",
    "awardsLabel": "Outcomes",
    "visitLabel": "View full case",
    "detailPlaceholder": "Project details",
    "phImageLabel": "Project preview",
    "phButtonLabel": "Open project",
    "countLabel": (n: number) => `${n} projects`,
    "sections": [
      {
        "id": "project-2",
        "no": "01",
        "title": "Product Presentations & WeChat Content",
        "tagline": "Communication Topics · Materials · Events · Partnerships",
        "items": [
          {
            "name": "AI Education Product Presentations & WeChat Content",
            "meta": "Audience Questions, Promotional Materials & University Events",
            "slug": "ai-education-partnership",
            "link": `${import.meta.env.BASE_URL}projects/ai-education-partnership/case_study.html`,
            "tags": [
              "Audience needs: 100+ feedback items informed publicity topics",
              "Communication: 30+ guides, FAQs, tutorials and use cases",
              "Execution: university events, materials and Southeast Asia partnerships",
              "Iteration: 10 suggestions; core-feature usage +30% during the internship"
            ]
          }
        ]
      },
      {
        "id": "project-1",
        "no": "02",
        "title": "Market Campaigns & Promotional Content",
        "tagline": "Events · Promotional Content · Partners · AI Reviews",
        "items": [
          {
            "name": "AI Information Product Campaigns & Promotional Content",
            "meta": "Campaign Planning, Creator Promotion & Performance Review",
            "slug": "ai-news-dashboard",
            "link": `${import.meta.env.BASE_URL}projects/ai-news-dashboard/case_study.html`,
            "tags": [
              "Events: selected acquisition campaigns and technology-event support",
              "Content: 100+ posts plus creator screening and launch tracking",
              "AI: promotional copy, content ideation and an operations dashboard",
              "Review: registrations +50% versus prior week; first-topic rate about +15% relatively"
            ]
          }
        ]
      },
      {
        "id": "project-4",
        "no": "03",
        "title": "Launch Content & Channel Coordination",
        "tagline": "Launch Topics · English Copy · Social Content · Channel Reviews",
        "items": [
          {
            "name": "ZUS Coffee Launch Content & Channel Coordination",
            "meta": "New-Product Messages, Instagram & Retail Communication",
            "slug": "zus-everywhere",
            "link": `${import.meta.env.BASE_URL}projects/zus-everywhere/case_study.html`,
            "tags": [
              "Research: consumer preferences and competitor content shaped launch messages",
              "Content: 50 Instagram posts, shooting, editing and English copy",
              "Channels: online launch and FamilyMart assets and schedules",
              "Review: 15+ reviews; contributed to 11k+ account follower growth"
            ]
          }
        ]
      }
    ]
  }
}


export const WORKS_CONTENT = WORKS

export const SECTION_COVERS: Record<string, string> = {
  'project-1': `${import.meta.env.BASE_URL}works/covers/sohu-dashboard.png`,
  'project-2': `${import.meta.env.BASE_URL}works/covers/education-pilot.png`,
  'project-4': `${import.meta.env.BASE_URL}works/covers/zus-everywhere.jpg`,
}
