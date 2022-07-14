/*Package api contains base API implementation of unified alerting
 *
 *Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 *
 *Do not manually edit these files, please find ngalert/api/swagger-codegen/ for commands on how to generate them.
 */
package api

import (
	"net/http"

	"github.com/grafana/grafana/pkg/api/response"
	"github.com/grafana/grafana/pkg/api/routing"
	"github.com/grafana/grafana/pkg/middleware"
	"github.com/grafana/grafana/pkg/models"
	"github.com/grafana/grafana/pkg/services/ngalert/metrics"
	"github.com/grafana/grafana/pkg/web"
)

type PrometheusApi interface {
	RouteGetAlertStatuses(*models.ReqContext) response.Response
	RouteGetGrafanaAlertStatuses(*models.ReqContext) response.Response
	RouteGetGrafanaRuleStatuses(*models.ReqContext) response.Response
	RouteGetRuleStatuses(*models.ReqContext) response.Response
}

func (f *PrometheusApiHandler) RouteGetAlertStatuses(ctx *models.ReqContext) response.Response {
	// Parse Path Parameters
	datasourceUIDParam := web.Params(ctx.Req)[":DatasourceUID"]
	return f.handleRouteGetAlertStatuses(ctx, datasourceUIDParam)
}
func (f *PrometheusApiHandler) RouteGetGrafanaAlertStatuses(ctx *models.ReqContext) response.Response {

	return f.handleRouteGetGrafanaAlertStatuses(ctx)
}
func (f *PrometheusApiHandler) RouteGetGrafanaRuleStatuses(ctx *models.ReqContext) response.Response {

	return f.handleRouteGetGrafanaRuleStatuses(ctx)
}
func (f *PrometheusApiHandler) RouteGetRuleStatuses(ctx *models.ReqContext) response.Response {
	// Parse Path Parameters
	datasourceUIDParam := web.Params(ctx.Req)[":DatasourceUID"]
	return f.handleRouteGetRuleStatuses(ctx, datasourceUIDParam)
}

func (api *API) RegisterPrometheusApiEndpoints(srv PrometheusApi, m *metrics.API) {
	api.RouteRegister.Group("", func(group routing.RouteRegister) {
		group.Get(
			toMacaronPath("/api/prometheus/{DatasourceUID}/api/v1/alerts"),
			api.authorize(http.MethodGet, "/api/prometheus/{DatasourceUID}/api/v1/alerts"),
			metrics.Instrument(
				http.MethodGet,
				"/api/prometheus/{DatasourceUID}/api/v1/alerts",
				srv.RouteGetAlertStatuses,
				m,
			),
		)
		group.Get(
			toMacaronPath("/api/prometheus/grafana/api/v1/alerts"),
			api.authorize(http.MethodGet, "/api/prometheus/grafana/api/v1/alerts"),
			metrics.Instrument(
				http.MethodGet,
				"/api/prometheus/grafana/api/v1/alerts",
				srv.RouteGetGrafanaAlertStatuses,
				m,
			),
		)
		group.Get(
			toMacaronPath("/api/prometheus/grafana/api/v1/rules"),
			api.authorize(http.MethodGet, "/api/prometheus/grafana/api/v1/rules"),
			metrics.Instrument(
				http.MethodGet,
				"/api/prometheus/grafana/api/v1/rules",
				srv.RouteGetGrafanaRuleStatuses,
				m,
			),
		)
		group.Get(
			toMacaronPath("/api/prometheus/{DatasourceUID}/api/v1/rules"),
			api.authorize(http.MethodGet, "/api/prometheus/{DatasourceUID}/api/v1/rules"),
			metrics.Instrument(
				http.MethodGet,
				"/api/prometheus/{DatasourceUID}/api/v1/rules",
				srv.RouteGetRuleStatuses,
				m,
			),
		)
	}, middleware.ReqSignedIn)
}
