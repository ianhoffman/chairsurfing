require 'test_helper'

class Api::ChairsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_chairs_index_url
    assert_response :success
  end

  test "should get create" do
    get api_chairs_create_url
    assert_response :success
  end

end
