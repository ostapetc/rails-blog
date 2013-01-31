Rails.application.config.middleware.use OmniAuth::Builder do
  if Rails.env == 'development'
    provider :facebook, '258566917606340', '0325f29ccfe211610d85f6131ee5105d'
  else
    provider :facebook, '535660163125389', '07e64c4bb098d121f9d0aa1d75a45c73'
  end

  provider :vkontakte, '3396596', 'POmOkvRSBLJn7TuOIMIx'
  provider :twitter, 'cK2MIFVXOpertDdfk495nA', 'NtAoUvTt9BSkjAUeIxEySE00LBrhxpPVfFpjF2endM'
end