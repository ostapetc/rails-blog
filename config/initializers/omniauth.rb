Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, '258566917606340', '0325f29ccfe211610d85f6131ee5105d'
  provider :twitter, 'cK2MIFVXOpertDdfk495nA', 'NtAoUvTt9BSkjAUeIxEySE00LBrhxpPVfFpjF2endM'
  provider :vkontakte, '258566917606340', '0325f29ccfe211610d85f6131ee5105d'
end