job "Sylvian-Web-App" {
  datacenters = ["glynac-dc"]
  type        = "service"
  namespace   = "platform"

  update {
    max_parallel     = 1
    health_check     = "task_states"
    min_healthy_time = "30s"
  }

  group "sylvian-web" {
    count = 1

    network {
      port "http" {
        static       = 3000
        to           = 3000
        host_network = "private"
      }
    }

    service {
      name = "sylvian-web"
      tags = ["apps", "logs.promtail"]
      port = "http"
      #   check {
      #     name     = "api-health"
      #     type     = "http"
      #     path     = "/api/health"
      #     interval = "30s"
      #     timeout  = "10s"
      #   }
    }

    constraint {
      attribute = "${attr.unique.hostname}"
      value     = "Worker-01"
    }

    task "sylvian-web" {
      driver = "docker"

      config {
        image       = "harbor-registry.service.consul:8085/glynac-fe/sylvian-web:IMAGE_TAG_PLACEHOLDER"
        ports       = ["http"]
        dns_servers = ["172.17.0.1", "172.18.0.1", "8.8.8.8", "8.8.4.4", "1.1.1.1"]
      }

      #   vault {
      #     role = "acumen"
      #   }

      #       template {
      #         destination = "secrets/env"
      #         env         = true

      #         data = <<EOF
      # NEXT_PUBLIC_SITE_URL="{{ with secret "secrets/frontend/glynac-beta" }}{{ .Data.data.NEXT_PUBLIC_SITE_URL }}{{ end }}"
      # RESEND_API_KEY="{{ with secret "secrets/frontend/glynac-beta" }}{{ .Data.data.RESEND_API_KEY }}{{ end }}"
      # RESEND_FROM_EMAIL="{{ with secret "secrets/frontend/glynac-beta" }}{{ .Data.data.RESEND_FROM_EMAIL }}{{ end }}"

      # RESEND_TO_EMAIL="{{ with secret "secrets/frontend/glynac-beta" }}{{ .Data.data.RESEND_TO_EMAIL }}{{ end }}"
      # NEXT_PUBLIC_USE_STRAPI="{{ with secret "secrets/frontend/glynac-beta" }}{{ .Data.data.NEXT_PUBLIC_USE_STRAPI }}{{ end }}"
      # NEXT_PUBLIC_STRAPI_URL="{{ with secret "secrets/frontend/glynac-beta" }}{{ .Data.data.NEXT_PUBLIC_STRAPI_URL }}{{ end }}"
      # STRAPI_API_TOKEN="{{ with secret "secrets/frontend/glynac-beta" }}{{ .Data.data.STRAPI_API_TOKEN }}{{ end }}"
      # EOF
      #       }

      resources {
        cpu    = 200
        memory = 200
      }
    }
  }
}