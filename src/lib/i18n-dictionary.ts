export type ModuleKey =
  | "dashboard"
  | "movements"
  | "trips"
  | "drivers"
  | "vehicles"
  | "gps"
  | "maintenance"
  | "documents"
  | "expenses"
  | "reports"
  | "users"
  | "settings";

type ModuleCopy = { title: string; description: string; scope: string[] };

const en = {
  app: {
    name: "LETH Operations",
    company: "LETH Agencies",
    tagline: "Crew Transportation & Fleet Management",
  },
  groups: {
    operations: "Operations",
    fleet: "Fleet",
    administration: "Administration",
  },
  header: {
    toggleSidebar: "Toggle navigation",
    language: "Language",
    switchTo: "العربية",
    environment: "Setup in progress",
  },
  common: {
    notAvailable: "Not yet available",
    notConfigured: "Not configured",
    awaitingData: "Awaiting data connection",
    noData: "No data",
    open: "Open",
    plannedScope: "Planned scope",
  },
  dashboard: {
    title: "Operations Overview",
    subtitle:
      "Central view of crew movements, trips and fleet status across LETH Agencies operations.",
    setupNotice:
      "The system is being set up. Figures and activity will appear here once modules are connected to live operational data.",
    kpis: {
      activeMovements: "Active movements",
      tripsToday: "Trips today",
      driversOnDuty: "Drivers on duty",
      vehiclesAvailable: "Vehicles available",
      openMaintenance: "Open maintenance",
      expiringDocuments: "Expiring documents",
    },
    panels: {
      todayMovements: {
        title: "Today's crew movements",
        description: "Sign-on, sign-off and transfer movements scheduled for today.",
        empty: "No movements to show. Movement Management is not connected yet.",
      },
      fleetMap: {
        title: "Live fleet position",
        description: "Real-time vehicle locations from GPS devices.",
        empty: "GPS tracking is not connected. No vehicle positions are available.",
      },
      alerts: {
        title: "Alerts & expiries",
        description: "Licences, permits and vehicle documents nearing expiry.",
        empty: "No alerts. Documents & Permits is not connected yet.",
      },
      maintenance: {
        title: "Maintenance schedule",
        description: "Upcoming and overdue vehicle service.",
        empty: "No scheduled maintenance. The Maintenance module is not connected yet.",
      },
    },
    modules: {
      title: "Module setup status",
      description: "Each module becomes active once it is configured and connected.",
    },
  },
  modulePage: {
    statusTitle: "This module is not active yet",
    statusBody:
      "No records are shown because this module has not been connected to a data source. It will become available in an upcoming release.",
  },
  settings: {
    languageTitle: "Language & direction",
    languageDescription:
      "Choose the interface language. Arabic uses a right-to-left layout.",
    english: "English",
    arabic: "العربية (Arabic)",
    current: "Current",
    otherTitle: "Organisation settings",
    otherBody:
      "Company profile, branches, ports, notification rules and integrations will be configurable here in an upcoming release.",
  },
  modules: {
    dashboard: {
      title: "Dashboard",
      description: "Operations overview.",
      scope: [],
    },
    movements: {
      title: "Movement Management",
      description: "Plan and coordinate crew sign-on, sign-off and transfer movements.",
      scope: [
        "Crew movement requests from vessels and principals",
        "Sign-on / sign-off scheduling linked to vessel ETAs",
        "Assignment of drivers and vehicles to movements",
        "Movement status tracking and history",
      ],
    },
    trips: {
      title: "Trips",
      description: "Individual transport trips between ports, airports, hotels and offices.",
      scope: [
        "Trip creation from approved movements",
        "Pickup and drop-off points with timings",
        "Passenger manifests per trip",
        "Trip completion and proof of delivery",
      ],
    },
    drivers: {
      title: "Drivers",
      description: "Driver records, availability and licence compliance.",
      scope: [
        "Driver profiles and contact details",
        "Licence and port access permit validity",
        "Duty rosters and availability",
        "Trip history and performance",
      ],
    },
    vehicles: {
      title: "Vehicles",
      description: "Fleet register with vehicle details, capacity and status.",
      scope: [
        "Vehicle register with plate, type and capacity",
        "Registration and insurance details",
        "Operational status and assignment",
        "Odometer and utilisation records",
      ],
    },
    gps: {
      title: "GPS Tracking",
      description: "Live vehicle positions and route history.",
      scope: [
        "Integration with vehicle GPS devices",
        "Live map of fleet positions",
        "Route playback for completed trips",
        "Geofences for ports, terminals and airports",
      ],
    },
    maintenance: {
      title: "Maintenance",
      description: "Preventive and corrective vehicle maintenance.",
      scope: [
        "Service schedules by date and mileage",
        "Work orders and workshop records",
        "Parts and service cost tracking",
        "Vehicle downtime reporting",
      ],
    },
    documents: {
      title: "Documents & Permits",
      description: "Licences, permits and compliance documents with expiry control.",
      scope: [
        "Port access and gate passes",
        "Vehicle registration and insurance",
        "Driver licences and permits",
        "Automatic expiry reminders",
      ],
    },
    expenses: {
      title: "Expenses",
      description: "Operating costs for fuel, tolls, parking and services.",
      scope: [
        "Fuel, toll and parking expenses",
        "Expense allocation to trips and vehicles",
        "Receipt attachments",
        "Approval workflow",
      ],
    },
    reports: {
      title: "Reports",
      description: "Operational and financial reporting.",
      scope: [
        "Movement and trip volume reports",
        "Fleet utilisation and cost reports",
        "Driver activity reports",
        "Export to Excel and PDF",
      ],
    },
    users: {
      title: "Users & Permissions",
      description: "System users, roles and access control.",
      scope: [
        "User accounts for staff and coordinators",
        "Role-based access (admin, dispatcher, driver, viewer)",
        "Per-module permissions",
        "Activity audit log",
      ],
    },
    settings: {
      title: "Settings",
      description: "System preferences and organisation configuration.",
      scope: [],
    },
  } satisfies Record<ModuleKey, ModuleCopy>,
};

export type Dictionary = typeof en;

const ar: Dictionary = {
  app: {
    name: "ليث للعمليات",
    company: "وكالات ليث",
    tagline: "نقل الطواقم وإدارة الأسطول",
  },
  groups: {
    operations: "العمليات",
    fleet: "الأسطول",
    administration: "الإدارة",
  },
  header: {
    toggleSidebar: "إظهار / إخفاء القائمة",
    language: "اللغة",
    switchTo: "English",
    environment: "جارٍ الإعداد",
  },
  common: {
    notAvailable: "غير متاح بعد",
    notConfigured: "غير مُهيّأ",
    awaitingData: "بانتظار ربط البيانات",
    noData: "لا توجد بيانات",
    open: "فتح",
    plannedScope: "النطاق المخطط",
  },
  dashboard: {
    title: "نظرة عامة على العمليات",
    subtitle: "عرض مركزي لتحركات الطواقم والرحلات وحالة الأسطول في عمليات وكالات ليث.",
    setupNotice:
      "يجري إعداد النظام حالياً. ستظهر الأرقام والأنشطة هنا بعد ربط الوحدات ببيانات التشغيل الفعلية.",
    kpis: {
      activeMovements: "التحركات النشطة",
      tripsToday: "رحلات اليوم",
      driversOnDuty: "السائقون المناوبون",
      vehiclesAvailable: "المركبات المتاحة",
      openMaintenance: "صيانة مفتوحة",
      expiringDocuments: "وثائق قاربت على الانتهاء",
    },
    panels: {
      todayMovements: {
        title: "تحركات الطواقم اليوم",
        description: "تحركات الالتحاق والمغادرة والنقل المجدولة لليوم.",
        empty: "لا توجد تحركات لعرضها. وحدة إدارة التحركات غير مربوطة بعد.",
      },
      fleetMap: {
        title: "مواقع الأسطول المباشرة",
        description: "مواقع المركبات لحظياً من أجهزة التتبع.",
        empty: "التتبع عبر GPS غير مربوط. لا تتوفر مواقع للمركبات.",
      },
      alerts: {
        title: "التنبيهات وتواريخ الانتهاء",
        description: "الرخص والتصاريح ووثائق المركبات القريبة من الانتهاء.",
        empty: "لا توجد تنبيهات. وحدة الوثائق والتصاريح غير مربوطة بعد.",
      },
      maintenance: {
        title: "جدول الصيانة",
        description: "الصيانة القادمة والمتأخرة للمركبات.",
        empty: "لا توجد صيانة مجدولة. وحدة الصيانة غير مربوطة بعد.",
      },
    },
    modules: {
      title: "حالة إعداد الوحدات",
      description: "تصبح كل وحدة فعّالة بعد تهيئتها وربطها.",
    },
  },
  modulePage: {
    statusTitle: "هذه الوحدة غير مفعّلة بعد",
    statusBody:
      "لا تظهر أي سجلات لأن هذه الوحدة لم تُربط بمصدر بيانات بعد. ستتوفر في إصدار قادم.",
  },
  settings: {
    languageTitle: "اللغة واتجاه العرض",
    languageDescription: "اختر لغة الواجهة. تستخدم العربية اتجاه العرض من اليمين إلى اليسار.",
    english: "English (الإنجليزية)",
    arabic: "العربية",
    current: "الحالية",
    otherTitle: "إعدادات المؤسسة",
    otherBody:
      "سيكون بالإمكان ضبط ملف الشركة والفروع والموانئ وقواعد الإشعارات والتكاملات هنا في إصدار قادم.",
  },
  modules: {
    dashboard: { title: "لوحة التحكم", description: "نظرة عامة على العمليات.", scope: [] },
    movements: {
      title: "إدارة التحركات",
      description: "تخطيط وتنسيق تحركات التحاق الطواقم ومغادرتها ونقلها.",
      scope: [
        "طلبات تحركات الطواقم من السفن والملاك",
        "جدولة الالتحاق والمغادرة وفق مواعيد وصول السفن",
        "تعيين السائقين والمركبات للتحركات",
        "متابعة حالة التحركات وسجلها",
      ],
    },
    trips: {
      title: "الرحلات",
      description: "رحلات النقل بين الموانئ والمطارات والفنادق والمكاتب.",
      scope: [
        "إنشاء الرحلات من التحركات المعتمدة",
        "نقاط الاستلام والتوصيل مع التوقيتات",
        "قوائم الركاب لكل رحلة",
        "إتمام الرحلة وإثبات التسليم",
      ],
    },
    drivers: {
      title: "السائقون",
      description: "سجلات السائقين وتوفرهم وسريان رخصهم.",
      scope: [
        "ملفات السائقين وبيانات التواصل",
        "سريان الرخص وتصاريح دخول الموانئ",
        "جداول المناوبات والتوفر",
        "سجل الرحلات والأداء",
      ],
    },
    vehicles: {
      title: "المركبات",
      description: "سجل الأسطول مع بيانات المركبات وسعتها وحالتها.",
      scope: [
        "سجل المركبات برقم اللوحة والنوع والسعة",
        "بيانات الترخيص والتأمين",
        "الحالة التشغيلية والتعيين",
        "سجلات العداد ونسب الاستخدام",
      ],
    },
    gps: {
      title: "التتبع عبر GPS",
      description: "مواقع المركبات المباشرة وسجل المسارات.",
      scope: [
        "الربط مع أجهزة التتبع في المركبات",
        "خريطة مباشرة لمواقع الأسطول",
        "إعادة عرض مسارات الرحلات المكتملة",
        "نطاقات جغرافية للموانئ والمحطات والمطارات",
      ],
    },
    maintenance: {
      title: "الصيانة",
      description: "الصيانة الوقائية والتصحيحية للمركبات.",
      scope: [
        "جداول الخدمة حسب التاريخ والمسافة",
        "أوامر العمل وسجلات الورش",
        "متابعة تكاليف القطع والخدمة",
        "تقارير توقف المركبات",
      ],
    },
    documents: {
      title: "الوثائق والتصاريح",
      description: "الرخص والتصاريح ووثائق الامتثال مع متابعة تواريخ الانتهاء.",
      scope: [
        "تصاريح دخول الموانئ والبوابات",
        "ترخيص المركبات وتأمينها",
        "رخص السائقين وتصاريحهم",
        "تذكيرات تلقائية بتواريخ الانتهاء",
      ],
    },
    expenses: {
      title: "المصروفات",
      description: "تكاليف التشغيل من وقود ورسوم طرق ومواقف وخدمات.",
      scope: [
        "مصروفات الوقود ورسوم الطرق والمواقف",
        "توزيع المصروفات على الرحلات والمركبات",
        "إرفاق الإيصالات",
        "مسار اعتماد المصروفات",
      ],
    },
    reports: {
      title: "التقارير",
      description: "التقارير التشغيلية والمالية.",
      scope: [
        "تقارير حجم التحركات والرحلات",
        "تقارير استخدام الأسطول وتكاليفه",
        "تقارير نشاط السائقين",
        "التصدير إلى Excel وPDF",
      ],
    },
    users: {
      title: "المستخدمون والصلاحيات",
      description: "مستخدمو النظام والأدوار وصلاحيات الوصول.",
      scope: [
        "حسابات الموظفين والمنسقين",
        "صلاحيات حسب الدور (مدير، منسق حركة، سائق، مشاهد)",
        "صلاحيات لكل وحدة",
        "سجل تدقيق الأنشطة",
      ],
    },
    settings: {
      title: "الإعدادات",
      description: "تفضيلات النظام وإعدادات المؤسسة.",
      scope: [],
    },
  },
};

export type Lang = "en" | "ar";

export const dictionaries: Record<Lang, Dictionary> = { en, ar };

export function directionFor(lang: Lang): "ltr" | "rtl" {
  return lang === "ar" ? "rtl" : "ltr";
}
