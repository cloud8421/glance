require 'ostruct'
require 'forecast_io'

ForecastIO.configure do |configuration|
  configuration.api_key = ENV['FORECAST_IO_API_KEY']
end

class WeatherApi < Sinatra::Base
  use Rack::Cache

  before do
    content_type :json
    expires 60, :public, :must_revalidate
  end

  get '/weather/work.json' do
    ForecastIO.forecast(work_coordinates.lat, work_coordinates.long).to_json
  end

  get '/weather/home.json' do
    ForecastIO.forecast(home_coordinates.lat, home_coordinates.long).to_json
  end

  private

  def home_coordinates
    OpenStruct.new(lat: 51.58369, long: -0.11676)
  end

  def work_coordinates
    OpenStruct.new(lat: 51.519654, long: -0.098996)
  end

end
