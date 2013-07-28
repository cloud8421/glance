require 'ostruct'
require 'forecast_io'

ForecastIO.configure do |configuration|
  configuration.api_key = ENV['FORECAST_IO_API_KEY']
end

class WeatherApi < Sinatra::Base

  before do
    content_type :json
  end

  get '/weather/work.json' do
    ForecastIO.forecast(work_coordinates.lat, work_coordinates.long).to_json
  end

  get '/weather/home.json' do
    ForecastIO.forecast(home_coordinates.lat, home_coordinates.long).to_json
  end

  private

  def home_coordinates
    OpenStruct.new(lat: 51.608649, long: -0.11924)
  end

  def work_coordinates
    OpenStruct.new(lat: 51.608516, long: -0.123693)
  end

end
