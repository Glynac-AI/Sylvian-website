job "Sylvian-Web-App_Dev" {
  datacenters = ["glynac-dc"]
  type        = "service"
  namespace   = "platform"

  update {
    max_parallel     = 1
    health_check     = "task_states"
    min_healthy_time = "30s"
  }

  group "sylvian-web-dev" {
    count = 1

    network {
      port "http" {
        static       = 3002
        to           = 3000
        host_network = "public"
      }
    }

    service {
      name = "sylvian-web-dev"
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
      value     = "Worker-08"
    }

    task "sylvian-web" {
      driver = "docker"

      config {
        image       = "harbor-registry.service.consul:8085/glynac-fe/sylvian-web-dev:IMAGE_TAG_PLACEHOLDER"
        ports       = ["http"]
        dns_servers = ["172.17.0.1", "172.18.0.1", "8.8.8.8", "8.8.4.4", "1.1.1.1"]
      }

      vault {
        role = "acumen"
      }

      template {
        destination = "secrets/env"
        env         = true

        data = <<EOF
      CLOUDINARY_API_KEY="{{ with secret "secrets/frontend/sylvan-dev" }}{{ .Data.data.CLOUDINARY_API_KEY }}{{ end }}"
      CLOUDINARY_API_SECRET="{{ with secret "secrets/frontend/sylvan-dev" }}{{ .Data.data.CLOUDINARY_API_SECRET }}{{ end }}"
      CLOUDINARY_CLOUD_NAME="{{ with secret "secrets/frontend/sylvan-dev" }}{{ .Data.data.CLOUDINARY_CLOUD_NAME }}{{ end }}"

      DATABASE_URL="{{ with secret "secrets/frontend/sylvan-dev" }}{{ .Data.data.DATABASE_URL }}{{ end }}"
      PAYLOAD_SECRET="{{ with secret "secrets/frontend/sylvan-dev" }}{{ .Data.data.PAYLOAD_SECRET }}{{ end }}"
      S3_ACCESS_KEY_ID="{{ with secret "secrets/frontend/sylvan-dev" }}{{ .Data.data.S3_ACCESS_KEY_ID }}{{ end }}"
      S3_BUCKET="{{ with secret "secrets/frontend/sylvan-dev" }}{{ .Data.data.S3_BUCKET }}{{ end }}"
      S3_ENDPOINT="{{ with secret "secrets/frontend/sylvan-dev" }}{{ .Data.data.S3_ENDPOINT}}{{ end }}"
      S3_REGION="{{ with secret "secrets/frontend/sylvan-dev" }}{{ .Data.data.S3_REGION }}{{ end }}"
      S3_SECRET_ACCESS_KEY="{{ with secret "secrets/frontend/sylvan-dev" }}{{ .Data.data.S3_SECRET_ACCESS_KEY }}{{ end }}"
      STRAPI_API_TOKEN="{{ with secret "secrets/frontend/sylvan-dev" }}{{ .Data.data.STRAPI_API_TOKEN }}{{ end }}"
      STRAPI_URL="{{ with secret "secrets/frontend/sylvan-dev" }}{{ .Data.data.STRAPI_URL }}{{ end }}"

      EOF
      }

      resources {
        cpu    = 200
        memory = 200
      }
    }
  }
}