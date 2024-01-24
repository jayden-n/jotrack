import {
  BadRequestException,
  NotFoundException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JobRequestDto, JobResponseDto } from './dto';
import { Job } from '@prisma/client';

@Injectable()
export class JobService {
  constructor(private prismaService: PrismaService) {}

  public async retrieveJobs(): Promise<JobResponseDto[]> {
    return (await this.prismaService.job.findMany()).map((job) =>
      this.mapToJobResponseDto(job),
    );
  }

  public async createJob(jobRequestDto: JobRequestDto) {
    try {
      const job = await this.prismaService.job.create({
        data: {
          ...jobRequestDto,
        },
      });

      return this.mapToJobResponseDto(job);
    } catch (error) {
      console.error(error);
      throw new BadRequestException('fields must be completed');
    }
  }

  public async updateJob(jobId: number, jobRequestDto: JobRequestDto) {
    try {
      const job = await this.prismaService.job.update({
        where: {
          id: jobId,
        },
        data: {
          ...jobRequestDto,
        },
      });

      return this.mapToJobResponseDto(job);
    } catch (error) {
      throw new BadRequestException('fields must be completed');
    }
  }

  public async removeJob(jobId: number) {
    try {
      await this.prismaService.job.delete({
        where: {
          id: jobId,
        },
      });
    } catch (error) {
      throw new NotFoundException('job does not exist');
    }
  }

  public async retrieveJob(jobId: number): Promise<Job> {
    try {
      const job = await this.prismaService.job.findUnique({
        where: { id: jobId },
      });

      return job;
    } catch (error) {
      throw new NotFoundException('job does not exist');
    }
  }

  private mapToJobResponseDto(job: Job): JobResponseDto {
    const jobResponseDto: JobResponseDto = new JobResponseDto();

    jobResponseDto.city = job.city;
    jobResponseDto.companyName = job.companyName;
    jobResponseDto.country = job.country;
    jobResponseDto.description = job.description;
    jobResponseDto.position = job.position;
    jobResponseDto.postalCode = job.postalCode;
    jobResponseDto.province = job.province;
    jobResponseDto.requirements = job.requirements;
    jobResponseDto.street = job.street;
    jobResponseDto.title = job.title;

    return jobResponseDto;
  }
}
