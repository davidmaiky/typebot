import { defineLocale } from '.'

export default defineLocale({
  back: 'Voltar',
  'confirmModal.defaultTitle': 'Tem a certeza?',
  'dashboard.header.settingsButton.label': 'Configurações & Membros',
  'dashboard.redirectionMessage': 'Está a ser redirecionado...',
  'dashboard.title': 'Os meus typebots',
  delete: 'Apagar',
  errorMessage: 'Ocorreu um erro',
  cancel: 'Cancelar',
  update: 'Atualizar',
  upgrade: 'Atualizar',
  downgrade: 'Desatualizar',
  remove: 'Remover',
  pending: 'Pendente',
  skip: 'Saltar',
  'folders.createFolderButton.label': 'Criar uma pasta',
  'folders.createTypebotButton.label': 'Criar um typebot',
  'folders.folderButton.deleteConfirmationMessage':
    'Tem a certeza de que deseja excluir a pasta {folderName}? (Tudo o que estiver dentro será movido para o seu painel)',
  'folders.typebotButton.live': 'Ao Vivo',
  'folders.typebotButton.showMoreOptions': 'Mostrar mais opções',
  'folders.typebotButton.unpublish': 'Despublicar',
  'folders.typebotButton.duplicate': 'Duplicar',
  'folders.typebotButton.delete': 'Apagar',
  'folders.typebotButton.deleteConfirmationMessage':
    'Tem a certeza de que deseja excluir o seu typebot {typebotName}?',
  'folders.typebotButton.deleteConfirmationMessageWarning':
    'Todos os dados associados serão excluídos e não poderão ser recuperados.',
  'account.apiTokens.heading': 'Tokens de API',
  'account.apiTokens.description':
    'Estes tokens permitem que outras aplicações controlem toda a sua conta e typebots. Tenha cuidado!',
  'account.apiTokens.createButton.label': 'Criar',
  'account.apiTokens.deleteButton.label': 'Excluir',
  'account.apiTokens.table.nameHeader': 'Nome',
  'account.apiTokens.table.createdHeader': 'Criado',
  'account.apiTokens.deleteConfirmationMessage':
    'O token {tokenName} será revogado permanentemente. Tem a certeza de que deseja continuar?',
  'account.apiTokens.createModal.createHeading': 'Criar Token',
  'account.apiTokens.createModal.createdHeading': 'Token Criado',
  'account.apiTokens.createModal.nameInput.label':
    'Insira um nome único para o seu token para o diferenciar de outros tokens.',
  'account.apiTokens.createModal.nameInput.placeholder':
    'Ex. Zapier, Github, Make.com',
  'account.apiTokens.createModal.createButton.label': 'Criar token',
  'account.apiTokens.createModal.doneButton.label': 'Concluído',
  'account.apiTokens.createModal.copyInstruction':
    'Por favor, copie o seu token e guarde-o num lugar seguro.',
  'account.apiTokens.createModal.securityWarning':
    'Por razões de segurança, não o podemos mostrar novamente.',
  'account.preferences.language.heading': 'Idioma',
  'account.preferences.language.tooltip':
    'As traduções ainda não estão completas. É um trabalho em curso. 🤓',
  'account.preferences.graphNavigation.heading': 'Navegação do Editor',
  'account.preferences.graphNavigation.mouse.label': 'Rato',
  'account.preferences.graphNavigation.mouse.description':
    'Mova arrastando o quadro e amplie/reduza usando a roda de deslocamento',
  'account.preferences.graphNavigation.trackpad.label': 'Trackpad',
  'account.preferences.graphNavigation.trackpad.description':
    'Mova o quadro usando 2 dedos e amplie/reduza fazendo pinça',
  'account.preferences.appearance.heading': 'Aparência',
  'account.preferences.appearance.systemLabel': 'Sistema',
  'account.preferences.appearance.lightLabel': 'Claro',
  'account.preferences.appearance.darkLabel': 'Escuro',
  'account.myAccount.changePhotoButton.label': 'Alterar foto',
  'account.myAccount.changePhotoButton.specification':
    '.jpg ou.png, máximo 1MB',
  'account.myAccount.emailInput.disabledTooltip':
    'A atualização do e-mail não está disponível. Entre em contacto com o apoio se quiser alterá-lo.',
  'account.myAccount.emailInput.label': 'Endereço de e-mail:',
  'account.myAccount.nameInput.label': 'Nome:',
  'analytics.viewsLabel': 'Visualizações',
  'analytics.startsLabel': 'Inícios',
  'analytics.notAvailableLabel': 'Não disponível',
  'analytics.completionRateLabel': 'Taxa de conclusão',
  'auth.signin.heading': 'Entrar',
  'auth.signin.noAccountLabel.preLink': 'Não tem uma conta?',
  'auth.signin.noAccountLabel.link': 'Registe-se gratuitamente',
  'auth.register.heading': 'Criar uma conta',
  'auth.register.alreadyHaveAccountLabel.preLink': 'Já tem uma conta?',
  'auth.register.alreadyHaveAccountLabel.link': 'Entrar',
  'auth.register.aggreeToTerms':
    'Ao registar-se, concorda com os nossos {termsOfService} e {privacyPolicy}.',
  'auth.register.termsOfService': 'termos de serviço',
  'auth.register.privacyPolicy': 'política de privacidade',
  'auth.error.default': 'Tente entrar com uma conta diferente.',
  'auth.error.email':
    'E-mail não encontrado. Tente entrar com um fornecedor diferente.',
  'auth.error.oauthNotLinked':
    'Para confirmar a sua identidade, entre com a mesma conta que usou originalmente.',
  'auth.error.unknown': 'Ocorreu um erro. Tente novamente.',
  'auth.signinErrorToast.title': 'Não autorizado',
  'auth.signinErrorToast.description': 'As inscrições estão desativadas.',
  'auth.signinErrorToast.tooManyRequests':
    'Muitas tentativas. Tente novamente mais tarde.',
  'auth.noProvider.preLink': 'Precisa de',
  'auth.noProvider.link':
    'configurar pelo menos um fornecedor de autenticação (E-mail, Google, GitHub, Facebook ou Azure AD).',
  'auth.orEmailLabel': 'Ou com o seu e-mail',
  'auth.emailSubmitButton.label': 'Enviar',
  'auth.magicLink.title': 'Foi enviado um e-mail com a ligação mágica. 🪄',
  'auth.magicLink.description':
    'Certifique-se de verificar a sua pasta de spam.',
  'auth.socialLogin.githubButton.label': 'Continuar com GitHub',
  'auth.socialLogin.googleButton.label': 'Continuar com Google',
  'auth.socialLogin.facebookButton.label': 'Continuar com Facebook',
  'auth.socialLogin.azureButton.label': 'Continuar com {azureProviderName}',
  'auth.socialLogin.gitlabButton.label': 'Continuar com {gitlabProviderName}',
  'auth.socialLogin.customButton.label': 'Continuar com {customProviderName}',
  'billing.billingPortalButton.label': 'Portal de facturação',
  'billing.contribution.preLink':
    'A Typebot está a contribuir com 1% da sua subscrição para remover o CO₂ da atmosfera.',
  'billing.contribution.link': 'Saiba mais.',
  'billing.updateSuccessToast.description':
    'A sua subscrição {plan} foi atualizada com sucesso 🎉',
  'billing.customLimit.preLink':
    'Precisa de limites personalizados? Funcionalidades específicas?',
  'billing.customLimit.link': 'Vamos falar!',
  'billing.upgradeLimitLabel':
    'Precisa de atualizar a sua subscrição para {type}',
  'billing.currentSubscription.heading': 'Subscrição',
  'billing.currentSubscription.subheading':
    'Subscrição actual do espaço de trabalho:',
  'billing.invoices.heading': 'Facturas',
  'billing.invoices.empty':
    'Nenhuma factura encontrada para este espaço de trabalho.',
  'billing.invoices.paidAt': 'Pago em',
  'billing.invoices.subtotal': 'Subtotal',
  'billing.preCheckoutModal.companyInput.label': 'Nome da empresa:',
  'billing.preCheckoutModal.emailInput.label': 'E-mail:',
  'billing.preCheckoutModal.taxId.label': 'Identificação fiscal (NIF):',
  'billing.preCheckoutModal.taxId.placeholder': 'Tipo de ID',
  'billing.preCheckoutModal.submitButton.label':
    'Ir para a finalização da compra',
  'billing.pricingCard.heading': 'Mudar para {plan}',
  'billing.pricingCard.perMonth': '/ mês',
  'billing.pricingCard.plus': ', mais:',
  'billing.pricingCard.upgradeButton.current': 'A sua subscrição atual',
  'billing.pricingCard.chatsPerMonth': 'chats/mês',
  'billing.pricingCard.chatsTooltip':
    'Um chat é contado sempre que um utilizador inicia uma discussão. Ele é independente do número de mensagens que envia e recebe.',
  'billing.pricingCard.storageLimit': 'GB de armazenamento',
  'billing.pricingCard.storageLimitTooltip':
    'Acumula armazenamento para cada ficheiro que o seu utilizador carrega no seu bot. Se excluir o resultado, ele libertará espaço.',
  'billing.pricingCard.starter.description':
    'Para indivíduos e pequenas empresas.',
  'billing.pricingCard.starter.includedSeats': '2 lugares incluídos',
  'billing.pricingCard.starter.brandingRemoved': 'Marca removida',
  'billing.pricingCard.starter.fileUploadBlock': 'Bloco de envio de ficheiro',
  'billing.pricingCard.starter.createFolders': 'Criar pastas',
  'billing.pricingCard.pro.mostPopularLabel': 'Mais popular',
  'billing.pricingCard.pro.description':
    'Para agências e startups em crescimento.',
  'billing.pricingCard.pro.everythingFromStarter': 'Tudo em Starter',
  'billing.pricingCard.pro.includedSeats': '5 lugares incluídos',
  'billing.pricingCard.pro.customDomains': 'Domínios personalizados',
  'billing.pricingCard.pro.analytics': 'Análises aprofundadas',
  'billing.usage.heading': 'Uso',
  'billing.usage.chats.heading': 'Chats',
  'billing.usage.chats.alert.soonReach':
    'Os seus typebots são populares! Vai alcançar em breve o limite de chats do seu plano. 🚀',
  'billing.usage.chats.alert.updatePlan':
    'Certifique-se de atualizar o seu plano para aumentar esse limite e continuar a conversar com os seus utilizadores.',
  'billing.usage.chats.resetInfo': '(reiniciado a cada dia 1)',
  'billing.usage.storage.heading': 'Armazenamento',
  'billing.usage.storage.alert.soonReach':
    'Os seus typebots são populares! Vai alcançar em breve o limite de armazenamento do seu plano. 🚀',
  'billing.usage.storage.alert.updatePlan':
    'Certifique-se de atualizar o seu plano para continuar a recolher ficheiros enviados. Também pode excluir ficheiros para libertar espaço.',
  'billing.limitMessage.brand': 'remover a marca',
  'billing.limitMessage.customDomain': 'adicionar domínios personalizados',
  'billing.limitMessage.analytics': 'desbloquear análises aprofundadas',
  'billing.limitMessage.fileInput': 'usar blocos de envio de ficheiros',
  'billing.limitMessage.folder': 'criar pastas',
  'billing.upgradeAlert.buttonDefaultLabel': 'Mais informações',
  'workspace.membersList.inviteInput.placeholder': 'colega@empresa.com',
  'workspace.membersList.inviteButton.label': 'Convidar',
  'workspace.membersList.unlockBanner.label':
    'Atualize o seu plano para trabalhar com mais membros da equipa e desbloquear funcionalidades incríveis 🚀',
  'workspace.membersList.title': 'Membros',
  'workspace.settings.icon.title': 'Ícone',
  'workspace.settings.name.label': 'Nome:',
  'workspace.settings.deleteButton.label': 'Eliminar espaço de trabalho',
  'workspace.settings.deleteButton.confirmMessage':
    'Tem a certeza de que deseja eliminar o espaço de trabalho {workspaceName}? Todas as suas pastas, typebots e resultados serão excluídos permanentemente.',
  'workspace.settings.modal.menu.myAccount.label': 'A minha conta',
  'workspace.settings.modal.menu.preferences.label': 'Preferências',
  'workspace.settings.modal.menu.workspace.label': 'Espaço de trabalho',
  'workspace.settings.modal.menu.settings.label': 'Configurações',
  'workspace.settings.modal.menu.members.label': 'Membros',
  'workspace.settings.modal.menu.billingAndUsage.label': 'Faturação e uso',
  'workspace.settings.modal.menu.version.label': 'Versão: {version}',
  'workspace.dropdown.newButton.label': 'Novo espaço de trabalho',
  'workspace.dropdown.logoutButton.label': 'Sair',
})
