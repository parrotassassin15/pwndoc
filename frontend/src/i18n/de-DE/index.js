export default {
    generalSettings: 'Allgemeine Einstellungen',
    changeDisplayLanguage: 'Anzeigesprache',
    changeDisplayLanguageInfo: 'Wählen Sie Ihre bevorzugte Anzeigesprache',
    nav: {
        audits: 'Audits',
        vulnerabilities: 'Schwachstellen',
        data: 'Daten',
    },
    btn: {
        cancel: 'Abbrechen',
        confirm: 'Bestätigen',
        create: 'Erstellen',
        topButtonSection: {
            submitReview: 'Zur Prüfung einreichen',
            cancelReview: 'Überprüfung abbrechen',
            approve: 'Freigeben',
            removeApproval: 'Freigabe entfernen',
        },
        backupFinding: "Neue Schwachstelle / Änderung in Datenbank vorschlagen",
        delete: 'Löschen',
        save: 'Speichern',
        update: 'Aktualisieren',
        deleteAll: 'Alle löschen',
        enable: 'Aktiviert',
        valid: 'Geprüft',
        new: 'Neu',
        updates: 'Aktualisierungen',
    },
    tooltip: {
        usersConnected: 'Benutzer im Audit:',
        editAudit: 'Audit bearbeiten',
        downloadReport: 'Report herunterladen',
        deleteAudit: 'Audit löschen',
        topButtonSection: {
            submitReview: 'Audit als prüfbereit markieren',
            cancelReview: 'Änderungen am Audit vornehmen',
            approve: 'Dieses Audit freigeben',
            removeApproval: 'Auditfreigabe entfernen',
        },
        sortOptions: 'Sortieroptionen',
        addToFindings: 'Zu Ergebnis hinzufügen',
        edit: 'Bearbeiten',
        view: 'Ansicht',
        findAudits: 'Audits finden',
        delete: 'Löschen',
        download: 'Download',
    },
    msg: {
        auditReviewUpdateOk: 'Prüfstatus des Audits erfolgreich aktualisiert',
        auditApprovalUpdateOk: 'Auditfreigabe erfolgreich aktualisiert',
        auditUpdateOk: 'Audit erfolgreich aktualisiert',
        findingCreateOk: 'Ergebnis erfolgreich erstellt',
        findingUpdateOk: 'Ergebnis erfolgreich aktualisiert',
        findingDeleteOk: 'Ergebnis erfolgreich gelöscht',
        doYouWantToLeave: 'Möchten Sie die Seite wirklich verlassen ?',
        thereAreUnsavedChanges: 'Es gibt ungespeicherte Änderungen !',
        fieldRequired: 'Bitte füllen Sie alle benötigten Felder aus',
        deleteFindingConfirm: 'Aktuelles Ergebnis löschen ?',
        deleteFindingNotice: 'Diese Aktion kann nicht rückgängig gemacht werden',
        selectHost: 'Host auswählen',
        importHostsFirst: 'Hosts zuerst importieren',
        auditTypeNotSet: 'Audit-Typ ist nicht gesetzt',
        sectionUpdateOk: 'Abschnitt erfolgreich aktualisiert',
        lastnameRequired: 'Nachname benötigt',
        firstnameRequired: 'Vorname benötigt',
        emailRequired: 'E-Mail benötigt',
        clientCreatedOk: 'Kunde erfolgreich erstellt',
        clientUpdatedOk: 'Kunde erfolgreich aktualisiert',
        clientDeletedOk: 'Kunde erfolgreich gelöscht',
        deleteNotice: 'wird endgültig gelöscht',
        confirmSuppression: 'Unterdrückung bestätigen',
        usernameRequired: 'Benutzername benötigt',
        passwordRequired: 'Passwort benötigt',
        currentPasswordRequired: 'Aktuelles Passwort benötigt',
        confirmPasswordDifferents: 'Neues Passwort und Passwort bestätigen sind unterschiedlich',
        collaboratorCreatedOk: 'Mitarbeiter erfolgreich erstellt',
        collaboratorUpdatedOk: 'Mitarbeiter erfolgreich aktualisiert',
        collaboratorDeletedOk: 'Mitarbeiter erfolgreich gelöscht',
        nameRequired: 'Name benötigt',
        fileRequired: 'Datei benötigt',
        companyCreatedOk: 'Firma erfolgreich erstellt',
        companyUpdatedOk: 'Firma erfolgreich aktualisiert',
        companyDeletedOk: 'Firma erfolgreich gelöscht',
        templateNotFound: 'Vorlage nicht gefunden',
        templateCreatedOk: 'Vorlage erfolgreich erstellt',
        templateUpdatedOk: 'Vorlage erfolgreich aktualisiert',
        allVulnerabilitesDeleteNotice: 'Alle Schwachstellen werden endgültig gelöscht',
        allVulnerabilitesDeleteOk: 'Alle Schwachstellen wurden erfolgreich gelöscht',
        profileUpdateOk: 'Profil erfolgreich aktualisiert',
        settingsUpdatedOk: 'Einstellungen erfolgreich aktualisiert',
        revertingSettings: 'Einstellungen zurücksetzen !',
        revertingSettingsConfirm: 'Wollen Sie wirklich alle Einstellungen auf ihre Standardwerte zurücksetzen? Alle aktuellen Einstellungen gehen verloren.',
        importingSettings: 'Einstellungen importieren !',
        importingSettingsConfirm: 'Wollen Sie die neuen Einstellungen wirklich importieren? Sie werden alle aktuellen Einstellungen verlieren, die ersetzt werden.',
        settingsImportedOk: 'Einstellungen erfolgreich importiert',
        vulnerabilityCreatedOk: 'Schwachstelle erfolgreich erstellt',
        vulnerabilityUpdatedOk: 'Schwachstelle erfolgreich aktualisiert',
        vulnerabilityDeletedOk: 'Schwachstelle erfolgreich gelöscht',
        vulnerabilityWillBeDeleted: 'Schwachstelle wird endgültig gelöscht',
        confirmCategoryChange: 'Kategorieänderung bestätigen',
        categoryChangingNotice: 'Das Anzeigen benutzerdefinierter Felder könnte durch das Ändern der Kategorie beeinträchtigt werden',
        vulnerabilityMergeOk: 'Schwachstellen erfolgreich zusammengeführt',
        tryingToContactBackend: '<p>Versuche das Backend zu erreichen</p>',
        wrongContactingBackend: 'Beim Versuch das Backend zu erreichen ist etwas schief gegangen',
    },
    err: {
        notDefinedLanguage: 'Für diese Sprache nicht definiert',
        invalidYamlFormat: 'Ungültiges YAML-Format erkannt',
        parsingError1: 'Parsingfehler: {0}',
        parsingError2: 'Parsingfehler: Zeile {0}, Spalte: {1}',
        invalidJsonFormat: 'Ungültiges JSON-Format erkannt',
        jsonMustBeAnObject: 'JSON muss ein Objekt sein.',
        importingSettingsError: 'Fehler beim Importieren der Einstellungen',
        errorWhileParsingJsonContent: 'Fehler beim Parsen des JSON-Inhalts: {0}',
        titleRequired: 'Titel benötigt',
        expiredToken: 'Token abgelaufen',
        invalidToken: 'Token ungültig',
        invalidCredentials: 'Ungültige Zugangsdaten',
    },
    cvss: {
        title: 'CVSSv3 Basiswert',
        infoWhenNoScore: 'Wählen Sie Werte für alle Basismetriken um einen Score zu berechnen',
        attackVector: 'Angriffsvektor',
        attackComplexity: 'Angriffskomplexität',
        privilegesRequired: 'Benötigte Privilegien',
        userInteraction: 'Benutzerinteraktion',
        scope: 'Geltungsbereich',
        confidentialityImpact: 'Auswirkung auf Vertraulichkeit',
        integrityImpact: 'Auswirkung auf Integrität',
        availabilityImpact: 'Auswirkung auf Verfügbarkeit',
        network: 'Netzwerk',
        adjacentNetwork: 'Angrenzendes Netzwerk',
        local: 'Lokal',
        physical: 'Physisch',
        low: 'Niedrig',
        high: 'Hoch',
        none: 'Keine',
        required: 'Benötigt',
        unchanged: 'Unverändert',
        changed: 'Verändert',
    },
    registerFirstUser: 'Register First User',
    customData: 'Benutzerdefinierte Daten',
    custom: 'Custom',
    settings: 'Einstellungen',
    profile: 'Profil',
    logout: 'Abmelden',
    login: 'Anmelden',
    username: 'Benutzername',
    password: 'Passwort',
    noLanguage: 'Keine Sprachen definiert. Bitte erstellen Sie Sprachen in ',
    noAudit: 'Keine Audit-Typen definiert. Bitte erstellen Sie Audit-Typen in ',
    auditTypes: 'Audit-Typen',
    searchFinds: 'Ergebnisse durchsuchen',
    myAudits: 'Meine Audits',
    usersConnected: 'Benutzer verbunden',
    awaitingMyReview: 'Warten auf Überprüfung durch mich',
    newAudit: 'Neues Audit',
    search: 'Suche',
    users: 'Benutzer',
    auditNum1: 'Audit',
    auditNums: 'Audits',
    resultsPerPage: 'Ergebnisse pro Seite:',
    createAudit: 'Audit erstellen',
    name: 'Name',
    selectAssessment: 'Testtyp auswählen',
    selectLanguage: 'Sprache auswählen',
    participants: 'Teilnehmer',
    language: 'Sprache',
    company: 'Firma',
    companies: 'Firmen',
    date: 'Datum',
    sections: 'Abschnitte',
    generalInformation: 'Allgemeine Informationen',
    networkScan: 'Netzwerkscan',
    findings: 'Ergebnisse',
    automaticSorting: 'Automatische Sortierung',
    sortBy: 'Sortieren nach',
    sortOrder: 'Sortierreihenfolge',
    ascending: 'Aufsteigend',
    descending: 'Absteigend',
    me: 'ich',
    cvssScore: 'CVSS Score',
    priority: 'Priorität',
    remediation: 'Empfehlung',
    remediationDifficulty: 'Schwierigkeit der Empfehlung',
    remediationComplexity: 'Komplexität der Empfehlung',
    remediationPriority: 'Priorität der Empfehlung',
    easy: 'Leicht',
    medium: 'Mittel',
    complex: 'Komplex',
    low: 'Niedrig',
    high: 'Hoch',
    urgent: 'Dringend',
    title: 'Titel',
    category: 'Kategorie',
    selectCategory: 'Kategorie auswählen',
    noCategory: 'Keine Kategorie',
    vulnType: 'Typ',
    undefined: 'Undefiniert',
    vulnerabilityNum1: 'Schwachstelle',
    vulnerabilitiesNums: 'Schwachstellen',
    definition: 'Definition',
    proofs: 'Beweis',
    details: 'Details',
    completed: 'Vollständig',
    type: 'Type',
    description: 'Beschreibung',
    observation: 'Beobachtung',
    references: 'Referenzen (eine pro Zeile)',
    customFields: 'Benutzerdefinierte Felder',
    affectedAssets: 'Betroffene Assets',
    courseOfActions: 'Vorgehensweise',
    template: 'Vorlage',
    client: 'Kunde',
    reviewers: 'Prüfer',
    collaborator: 'Mitarbeiter',
    collaborators: 'Mitarbeiter',
    startDate: 'Startdatum',
    endDate: 'Enddatum',
    reportingDate: 'Berichtsdatum',
    auditScope: 'Geltungsbereich (einer pro Zeile)',
    import: 'Import',
    export: 'Export',
    hostsAssociateScopes: 'Importierte Hosts mit Geltungsbereichen assoziieren',
    handleCustomData: 'Handle Custom Data',
    companies: 'Firmen',
    clients: 'Kunden',
    templates: 'Vorlagen',
    addClient: 'Kunde hinzufügen',
    editClient: 'Kunde bearbeiten',
    firstname: 'Vorname',
    lastname: 'Nachname',
    email: 'E-Mail',
    function: 'Funktion',
    phone: 'Telefon',
    cell: 'Mobiltelefon',
    role: 'Rolle',
    collatorator: 'Mitarbeiter',
    addCollaborator: 'Mitarbeiter hinzufügen',
    editCollaborator: 'Mitarbeiter bearbeiten',
    addCompany: 'Firma hinzufügen',
    editCompany: 'Firma bearbeiten',
    logo: 'Logo',
    quantifier: '',
    languages: 'Sprachen',
    extension: 'Erweiterung',
    createTemplate: 'Vorlage erstellen',
    file: 'Datei',
    editTemplate: 'Vorlage bearbeiten',
    importVulnerabilities: 'Schwachstellen importieren',
    importVulnerabilitiesInfo: `Schwachstellen aus .yml- oder .json-Datei importieren. (Serpico-Format wird akzeptiert)<br />
    Dies erlaubt es Ihnen einfach eine Reihe von Schwachstellenvorlagen zu importieren.`,
    importVulnerabilitiesOk: 'Alle <strong>{0}</strong> Schwachstellen wurden erstellt',
    importVulnerabilitiesAllExists: 'Alle <strong>{0}</strong> Schwachstellentitel existieren bereits',
    importVulnerabilitiesPartial: '<strong>{0}</strong> Schwachstellen wurden erstellt<br /><strong>{1}</strong> Schwachstellentitel existieren bereits',
    exportVulnerabilities: 'Schwachstellen exportieren',
    exportVulnerabilitiesInfo: `Exportiert Schwachstellen im yaml-Format. Dieser Export kann später einfach wieder zurück-importiert werden`,
    deleteAllVulnerabilities: 'Alle Schwachstellen löschen',
    deleteAllVulnerabilitiesInfo: `Löscht alle existierende Schwachstellen.<br />
    <strong>Diese Aktion ist unwiderruflich!!</strong>`,
    customSections: 'Eigene Abschnitte',
    listOfLanguages: 'Liste der Sprachen',
    editLanguages: 'Sprache bearbeiten',
    locale: 'Locale',
    auditTypesUsedInAudits: 'Audit-Typen die in Audits genutzt werden',
    languageUsedInAuditsAndVuls: 'Sprachen die in Audits und Schwachstellen genutzt werden',
    addSections: 'Abschnitt hinzufügen',
    hideBuiltInSections: 'Vorgefertigte Abschnitte ausblenden',
    listOfAuditTypes: 'List der Audit-Typen',
    editAuditTypes: 'Audit-Typen bearbeiten',
    createAtLeastOneLanguage: 'Bitte erstellen Sie mindestens eine Sprache',
    createVulnerabilityTypes: 'Schwachstellentypen erstellen, welche in Schwachstellen und Ergebnissen genutzt werden',
    vulnerabilityTypesList: 'Liste der Schwachstellentypen',
    editVulnerabilityTypes: 'Schwachstellentypen bearbeiten',
    createVulnerabilityCategories: 'Schwachstellenkategorien erstellen, welche in Schwachstellen und Ergebnissen genutzt werden',
    defaultSortingOptions: 'Standardsortieroptionen',
    listOfCategories: 'Liste der Kategorien',
    editCategories: 'Kategorien bearbeiten',
    createAndManageCustomFields: 'Benutzerdefinierte Felder für verschiedene Ansichten erstellen und verwalten',
    selectView: 'Ansicht auswählen',
    selectSection: 'Abschnitt auswählen',
    selectComponent: 'Komponente auswählen',
    label: 'Label',
    size: 'Größe',
    offset: 'Offset',
    required: 'Benötigt',
    optionsLanguage: 'Sprache der Option',
    addOption: 'Option hinzufügen',
    languageForDefaultText: 'Sprache (für Standardtext)',
    createCustomSections: 'Benutzerdefinierte Abschnitte für Audits erstellen',
    fieldForTemplate: 'Feld (für Vorlage)',
    customIcon: 'Icon (Material/Font Awesome)',
    field: 'Feld',
    editSections: 'Abschnitt bearbeiten',
    vulnerabilityTypes: 'Schwachstellentypen',
    vulnerabilityCategories: 'Schwachstellenkategorien',
    auditGeneral: 'Audit allgemein',
    auditFinding: 'Auditergebnisse',
    auditSection: 'Auditabschnitte',
    vulnerability: 'Vulnerability',
    checkbox: 'Checkbox',
    date: 'Datum',
    editor: 'Editor',
    input: 'Eingabe',
    radio: 'Radio',
    select: 'Auswahl',
    selectMultiple: 'Mehrfachauswahl',
    space: 'Space',
    updateUserInformation: 'Benutzerinformationen aktualisieren',
    newPassword: 'Neues Passwort',
    confirmPassword: 'Passwort bestätigen',
    currentPassword: 'Aktuelles Passwort *',
    reports: 'Berichte',
    reportsImagesBorder: 'Bilderrahmen im Bericht',
    addBorderToImages: 'Fügt Bildern in generierten Berichten einen Rahmen hinzu.',
    currentColor: 'Aktuelle Farbe',
    cvssColors: 'CVSS-Farben',
    changeCvssColorsDescription: 'Ändert die Farben, welche den unterschiedlichen CVSS-Schweregraden im Bericht zugeordnet sind.',
    critical: 'Kritisch',
    informational: 'Informativ',
    reviews: 'Überprüfungen',
    auditUpdateAfterApproval: 'Audit-Aktualisierung nach Freigabe',
    changeApproveBehaviorIfAuditUpdated: 'Ändert das Verhalten für ein freigegebenes Audit, welches aktualisiert wird. Wenn ein Audit aktualisiert wird : ',
    removeAllPriorApprovals: 'Werden alle voherigen Freigaben entfernt.',
    keepAllPriorApprovals: 'Werden alle voherigen Freigaben beibehalten.',
    mandatoryReview: 'Verpflichtende Überprüfung',
    mandatoryReviewInfo: `Macht den Überprüfungsprozess verpflichtend. Wenn diese Option gewählt ist, kann ein Benutzer ein Audit nicht exportieren, bevor es nicht von der geforderten Anzahl von Überprüfern freigegeben wurde. 
    <br/>Die minimale Anzahl an Überprüfern wird ebenfalls genutzt, um festzulegen, ob ein Bericht als freigegeben markiert wird.`,
    minimalNumberOfReviewers: 'Minimale Anzahl an Überprüfern',
    saveSettings: 'Einstellungen speichern',
    revertSettingsToDefaults: 'Einstellung auf Standardwerte zurücksetzen',
    importSettings: 'Einstellungen importieren',
    exportSettings: 'Einstellungen exportieren',
    mergeVulnerabilities: 'Schwachstellen zusammenführen',
    mergeVulnerabilitiesInfo: `Das Ziel ist es, unterschiedliche Schwachstellen in verschiedenen Sprachen in eine einzelne Schwachstelle zusammenzuführen. <br />
    Dafür müssen mindestens 2 Sprachen existieren.`,
    newVulnerability: 'Neue Schwachstelle',
    total: 'Gesamt',
    addVulnerability: 'Schwachstelle hinzufügen',
    editVulnerability: 'Schwachstelle bearbeiten',
    changeCategory: 'Kategorie ändern',
    listOfSections: 'List der Abschnitte',
    updateVulnerability: 'Schwachstelle aktualisieren',
    current: 'Aktuell',
    languageAddFromRight: 'Sprache (von rechts hinzufügen)',
    languageMoveToLeft: 'Sprache (nach Links verschieben)',
    merge: 'Zusammenführen',
    goBack: 'Gehe zurück',
    twoStepVerification: '2-Stufige-Verifizierung',
    twoStepVerificationMessage: 'Öffnen Sie Ihre Authentifizierungs-App und geben Sie den angezeigten Sicherheitscode ein.'
  }
