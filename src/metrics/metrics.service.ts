import { Injectable, Query } from '@nestjs/common';
import { CreateMetricDto } from './dto/create-metric.dto';
import { UpdateMetricDto } from './dto/update-metric.dto';
import { CpmQueryDto } from './dto/CpmQueryDto';
import { EngagementQueryDto } from './dto/EngagementQueryDto';

@Injectable()
export class MetricsService {
  findCMP(cpmQueryDto: CpmQueryDto) {
    const { cost, impressions } = cpmQueryDto;
    return {"cpm": (cost / impressions) * 1000};

  }
  findEngagement(engagementQueryDto: EngagementQueryDto) {
    const { likes, comments, followers } = engagementQueryDto;
    return {"rate": ((likes + comments) / followers) * 100};
  }
  create(createMetricDto: CreateMetricDto) {
    return 'This action adds a new metric';
  }

  findAll() {
    return `This action returns all metrics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} metric`;
  }

  update(id: number, updateMetricDto: UpdateMetricDto) {
    return `This action updates a #${id} metric`;
  }

  remove(id: number) {
    return `This action removes a #${id} metric`;
  }
}
