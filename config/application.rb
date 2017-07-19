require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module ChairSurfing
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    config.assets.paths << Rails.root.join('vendor', 'assets', 'fonts')
    
    config.assets.precompile << /\.(?:svg|eot|woff|ttf|jpg)$/
    config.assets.precompile += %w( *.js ^[^_]*.css *.css.erb )

    config.assets.initialize_on_precompile = false
    config.assets.serve_static_files = true

  end
end
